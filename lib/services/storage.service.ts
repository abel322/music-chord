import fs from 'fs/promises';
import path from 'path';

interface UploadResult {
  url: string;
  key: string;
}

export class StorageService {
  /**
   * Upload a PDF file
   */
  static async uploadPDF(
    file: Buffer,
    filename: string,
    userId: string
  ): Promise<UploadResult> {
    const storageType = process.env.STORAGE_TYPE || 'local';

    if (storageType === 's3') {
      return this.uploadToS3(file, filename, userId);
    } else {
      return this.uploadToLocal(file, filename, userId);
    }
  }

  /**
   * Delete a PDF file
   */
  static async deletePDF(key: string): Promise<void> {
    const storageType = process.env.STORAGE_TYPE || 'local';

    if (storageType === 's3') {
      return this.deleteFromS3(key);
    } else {
      return this.deleteFromLocal(key);
    }
  }

  /**
   * Upload to AWS S3
   */
  private static async uploadToS3(
    file: Buffer,
    filename: string,
    userId: string
  ): Promise<UploadResult> {
    throw new Error('AWS S3 no está configurado. Usa STORAGE_TYPE=local en desarrollo.');
  }

  /**
   * Delete from AWS S3
   */
  private static async deleteFromS3(key: string): Promise<void> {
    throw new Error('AWS S3 no está configurado. Usa STORAGE_TYPE=local en desarrollo.');
  }

  /**
   * Upload to local filesystem
   */
  private static async uploadToLocal(
    file: Buffer,
    filename: string,
    userId: string
  ): Promise<UploadResult> {
    const key = `users/${userId}/books/${Date.now()}-${filename}`;
    const uploadsDir = path.join(process.cwd(), 'uploads');
    const filepath = path.join(uploadsDir, key);

    await fs.mkdir(path.dirname(filepath), { recursive: true });
    await fs.writeFile(filepath, file);

    const baseUrl = process.env.NEXTAUTH_URL || 'http://localhost:3000';
    const url = `${baseUrl}/uploads/${key}`;
    
    return { url, key };
  }

  /**
   * Delete from local filesystem
   */
  private static async deleteFromLocal(key: string): Promise<void> {
    const uploadsDir = path.join(process.cwd(), 'uploads');
    const filepath = path.join(uploadsDir, key);

    try {
      await fs.unlink(filepath);
    } catch (error) {
      console.warn(`Failed to delete file: ${filepath}`, error);
    }
  }

  /**
   * Validate PDF file
   */
  static validatePDF(file: { buffer: Buffer; originalname: string; mimetype?: string; size?: number }): { valid: boolean; error?: string } {
    if (file.mimetype && file.mimetype !== 'application/pdf') {
      return { valid: false, error: 'El archivo debe ser un PDF' };
    }

    const maxSize = 50 * 1024 * 1024; // 50MB
    if (file.size && file.size > maxSize) {
      return { valid: false, error: 'El archivo no debe exceder 50MB' };
    }

    return { valid: true };
  }
}

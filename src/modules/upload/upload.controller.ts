import {
  Controller,
  Post,
  Param,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { extname, join } from 'path';
import * as fs from 'fs';

@Controller('upload')
export class UploadController {
  @Post(':folder')
  @UseInterceptors(
    FileInterceptor('file', {
      storage: diskStorage({
        destination: (req, file, cb) => {
          const folder = req.params.folder;
          const uploadPath = join(process.cwd(), 'uploads', folder);
          console.log('Uploading to:', uploadPath);
          if (!fs.existsSync(uploadPath)) {
            fs.mkdirSync(uploadPath, { recursive: true });
          }

          cb(null, uploadPath);
        },
        filename: (req, file, cb) => {
          const name = file.originalname.replace(/\s+/g, '-').toLowerCase();
          const ext = extname(file.originalname);
          cb(null, `${Date.now()}-${name}`);
        },
      }),
    }),
  )
  uploadFile(
    @Param('folder') folder: string,
    @UploadedFile() file: Express.Multer.File,
  ) {
    return {
      filename: file.filename,
      folder,
      url: `/${folder}/${file.filename}`,
    };
  }
}

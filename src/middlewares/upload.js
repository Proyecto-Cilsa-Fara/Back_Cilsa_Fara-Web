import multer from 'multer';
import path from 'path';

// Configuración del almacenamiento con multer
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/'); 
    },
    filename: (req, file, cb) => {
        const fileExtension = path.extname(file.originalname); 
        cb(null, Date.now() + fileExtension); 
    }
});

// Validación de tipo de archivo (solo imágenes)
const fileFilter = (req, file, cb) => {
    const allowedTypes = ['image/jpeg', 'image/png', 'image/jpg'];
    if (allowedTypes.includes(file.mimetype)) {
        cb(null, true); 
    } else {
        cb(new Error('Solo se permiten archivos de tipo imagen (JPEG, PNG, JPG)'), false);
    }
};

// Configuración de multer con un límite de tamaño de archivo (5 MB máximo)
const upload = multer({
    storage,
    limits: { fileSize: 5 * 1024 * 1024 }, 
    fileFilter
});

export default upload;
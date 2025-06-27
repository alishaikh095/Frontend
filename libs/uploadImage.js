import fs from 'node:fs';
export async function UploadImage(formImage) {
    const extension = formImage.name.split(".").pop();
        const fileName = `${crypto.randomUUID()}.${extension}`;
    
        const stream = fs.createWriteStream(`public/images/${fileName}`);
        const bufferedImage = await meal.image.arrayBuffer();
    
        stream.write(Buffer.from(bufferedImage), (error) => {
          if (error) {
            throw new Error("Saving image failed!");
          }
        });
    
       return `/images/${fileName}`;
    
}
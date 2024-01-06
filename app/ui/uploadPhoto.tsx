import { useState } from "react";
const UploadPhoto = ({
  onImageUpload,
}: {
  onImageUpload: (imageData: string | null) => void;
}) => {
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);
  const handleImageUpload = (e: any) => {
    const file = e.target.files[0];

    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setUploadedImage(reader.result as string);
        onImageUpload(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };
  return (
    <div className="flex items-center justify-center bg-gray-400">
      <label
        htmlFor="imageInput"
        className="relative cursor-pointer rounded-lg overflow-hidden w-screen h-72"
      >
        {uploadedImage ? (
          <img
            src={uploadedImage}
            alt="Uploaded"
            className="object-cover w-full h-full"
          />
        ) : (
          <div className="flex flex-col items-center justify-center w-full h-full text-white text-xs">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="100"
              height="106"
              viewBox="0 0 140 106"
              fill="none"
            >
              <path
                d="M140 0H0V106H140V0ZM133.636 6.32836V75.8296L102.518 47.257L74.2318 69.4063L41.0614 39.1884L6.36364 71.7636V6.32836H133.636ZM6.36364 99.6716V80.4651L41.1409 47.8266L81.1364 84.183L85.4318 79.4367L79.0682 73.6304L102.184 55.5788L133.636 84.4519V99.6716H6.36364Z"
                fill="#999999"
              />
            </svg>
            <span className="text-2xl">Upload a cover photo</span>
          </div>
        )}
        <input
          type="file"
          id="imageInput"
          accept="image/*"
          className="absolute inset-0 opacity-0"
          onChange={handleImageUpload}
        />
      </label>
    </div>
  );
};

export default UploadPhoto;

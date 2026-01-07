/* eslint-disable react/no-unescaped-entities */
"use client";

import Image from "next/image";
import React, { useRef, useState } from "react";

type Props = {
  displayUrl: string | null;
  hasValue: boolean;
  onFileSelected: (file: File) => void;
  onClear: () => void;
  errorMessage?: string;
};

export default function ProfileImageDropzone({
  displayUrl,
  hasValue,
  onFileSelected,
  onClear,
  errorMessage,
}: Props) {
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFile = (fileList: FileList | null) => {
    const file = fileList?.[0];
    if (file) onFileSelected(file);
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    handleFile(e.dataTransfer.files);
  };

  return (
    <div className="flex flex-col items-center pb-6 border-b border-gray-100">
      <div className="relative mb-4">
        {displayUrl ? (
          <div className="relative h-32 w-32 rounded-full overflow-hidden border-4 border-quater shadow-lg">
            <Image
              src={displayUrl}
              alt="Aperçu du profil"
              fill
              className="object-cover"
            />
          </div>
        ) : (
          <div className="relative h-32 w-32 rounded-full bg-linear-to-br from-quater/10 to-primary/10 border-4 border-quater/30 flex items-center justify-center shadow-lg">
            <span className="material-icons text-quater/40 text-5xl">
              account_circle
            </span>
          </div>
        )}
      </div>

      <div className="w-full">
        <label
          htmlFor="profilePicture"
          className="block text-xs font-semibold text-quater mb-2"
        >
          <span className="material-icons inline-block mr-1 align-text-bottom text-base">
            image
          </span>
          Photo de profil
        </label>

        <div
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
          onClick={() => fileInputRef.current?.click()}
          className={`border-2 border-dashed rounded-lg p-4 text-center cursor-pointer transition ${
            isDragging
              ? "border-quater bg-quater/5"
              : "border-gray-300 hover:border-quater/50 hover:bg-gray-50/50"
          }`}
        >
          <div className="flex flex-col items-center gap-2">
            <span className="material-icons text-2xl text-quater/60">
              cloud_upload
            </span>
            <p className="text-xs font-medium text-quater">
              Glissez votre image ici ou cliquez
            </p>
            <p className="text-xs text-gray-500">(JPG, PNG - Max 5 MB)</p>
          </div>
        </div>

        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          onChange={(e) => handleFile(e.target.files)}
          className="hidden"
        />

        {hasValue && (
          <button
            type="button"
            onClick={onClear}
            className="cursor-pointer mt-2 text-xs text-red-500 hover:text-red-700 flex items-center gap-1"
          >
            <span className="material-icons text-sm">delete</span>
            Supprimer l'image
          </button>
        )}

        {errorMessage && (
          <p className="text-red-500 text-xs mt-2 flex items-center gap-1">
            <span className="material-icons text-xs">error</span>
            {errorMessage}
          </p>
        )}
      </div>
    </div>
  );
}

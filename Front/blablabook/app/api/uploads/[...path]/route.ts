import { NextRequest, NextResponse } from "next/server";

// Pour récupérer et afficher les images depuis l'API NestJS (image profil etc : image recupérée depuis /uploads/...)
export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ path: string[] }> }
) {
  const resolvedParams = await params;
  const path = resolvedParams.path.join("/");
  const apiUrl = `http://api:3000/uploads/${path}`;

  try {
    const response = await fetch(apiUrl);

    if (!response.ok) {
      return new NextResponse("Image not found", { status: 404 });
    }

    const blob = await response.blob();
    const headers = new Headers();
    headers.set(
      "Content-Type",
      response.headers.get("Content-Type") || "image/jpeg"
    );
    headers.set("Cache-Control", "public, max-age=31536000, immutable");

    return new NextResponse(blob, {
      status: 200,
      headers,
    });
  } catch (error) {
    console.error("Error fetching image:", error);
    return new NextResponse("Error fetching image", { status: 500 });
  }
}

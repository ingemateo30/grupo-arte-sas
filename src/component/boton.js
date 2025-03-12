"use client";

import { useState } from "react";
import Link from "next/link";
import { Truck } from "lucide-react"; // Usa Lucide para el icono

const FloatingTruckButton = () => {
    const [hover, setHover] = useState(false);

    return (
        <div
            className="fixed bottom-6 left-6 flex flex-col items-center z-50"
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
        >
            {/* Tooltip - Aparece cuando se pasa el mouse */}
            {hover && (
                <div className="mb-2 px-3 py-1 bg-gray-800 text-white text-sm rounded-md shadow-md animate-fade-in">
                    Cotizar Ahora
                </div>
            )}

            {/* Botón flotante con el icono de camión */}
            <Link
                href="#contacto"
                className="bg-[#126491] hover:bg-[#0f5479] text-white p-4 rounded-full shadow-lg transition-transform duration-300 transform hover:scale-110 flex items-center justify-center"
                style={{ width: "60px", height: "60px" }}
            >
                <Truck size={30} className="text-white" />
            </Link>
        </div>
    );
};

export default FloatingTruckButton;


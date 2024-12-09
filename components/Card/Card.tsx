import React from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Heart } from "lucide-react";
import Link from "next/link";

// Define the type for car props
type CarProps = {
  name: string; // name
  image: string; // image src
  price: number; // price
  type: string; // type (sports, suv etc)
  seats: number; // seats (4,6 etc)
  litre: number; // litres
};
// Car Function for making dynamic cards using my manual API below
// It contains the styling of cards and postions of every word of card
const Car = ({ name, image, price, type, seats, litre }: CarProps) => (
  <Card className="p-4 shadow-lg hover:shadow-2xl hover:scale-105 duration-300 ">
    <div className="flex justify-between items-start mb-2">
      {/* Headings in card */}
      <div>
        <h3 className="font-semibold mb-1">{name}</h3>
        <p className="text-sm text-gray-500">{type}</p>
      </div>
      {/* Button for Heart */}
      <Button variant="ghost" size="icon" className="rounded-full">
        <Heart />
      </Button>
    </div>
    {/* Image of car */}
    <img src={image} alt={name} className="w-full h-40 object-contain my-4" />
    <div className="flex justify-evenly items-center mb-4 text-sm text-gray-600 font-bold">
      {/* Details of car */}
      <div className="items-center">
        <div>{litre}L</div>
      </div>
      <div className="items-center">
        <div>Manual</div>
      </div>
      <div className="items-center">
        <div>{seats} People</div>
      </div>
    </div>
    {/* Price Tag */}
    <div className="flex justify-between items-center">
      <div>
        <span className="text-lg font-bold">${price.toFixed(2)}</span>
        <span className="text-gray-500">/day</span>
      </div>
      {/* Rent Button  */}
      <Button className="bg-blue-600 px-5 mx-3"><Link href="/">Rent Now</Link></Button>
    </div>
  </Card>
);
// Variable as an Manual API (Car Deatils like name, price, type and image)
export function PCars() {
  const cars = [
    {
      name: "Koenigsegg",
      type: "Sport",
      price: 99.0,
      image: "/car1.jpg",
      seats: 2,
      litre: 90,
    },
    {
      name: "Nissan GT-R",
      type: "Sport",
      price: 80.0,
      image: "/car2.jpg",
      seats: 2,
      litre: 80,
    },
    {
      name: "Rolls-Royce",
      type: "Sedan",
      price: 96.0,
      image: "/car3.jpg",
      seats: 4,
      litre: 70,
    },
    {
      name: "Nissan GT-R",
      type: "Sport",
      price: 80.0,
      image: "/car4.jpg",
      seats: 2,
      litre: 80,
    },
  ];

  return (
    // Returning values to the card which is created above
    <div className="px-[7%]">
      <main className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 p-5">
        {cars.map((car, index) => (
          <Car key={index} {...car} />
        ))}
      </main>
    </div>
  );
}
// New function for Recommended Cars
export function ReCars() {
    // local API 
  const reCars = [
    {
      name: "All New Rush",
      type: "SUV",
      price: 72.0,
      image: "/car5.jpg",
      seats: 6,
      litre: 70,
    },
    {
      name: "CR-V",
      type: "SUV",
      price: 72.0,
      image: "/car6.jpg",
      seats: 6,
      litre: 80,
    },
    {
      name: "All New Terious",
      type: "SUV",
      price: 74.0,
      image: "/car7.jpg",
      seats: 6,
      litre: 90,
    },
    {
      name: "CR-V",
      type: "SUV",
      price: 80.0,
      image: "/car8.jpg",
      seats: 6,
      litre: 70,
    },
    {
      name: "MG ZX Exclusice",
      type: "Hatchback",
      price: 76.0,
      image: "/car9.jpg",
      seats: 4,
      litre: 80,
    },
    {
      name: "New MG ZS",
      type: "SUV",
      price: 80.0,
      image: "/car10.jpg",
      seats: 6,
      litre: 70,
    },
    {
      name: "MG ZX Excite",
      type: "SUV",
      price: 74.0,
      image: "/car11.jpg",
      seats: 4,
      litre: 90,
    },
    {
      name: "New MG ZS",
      type: "SUV",
      price: 80.0,
      image: "/car12.jpg",
      seats: 6,
      litre: 80,
    },
  ];
  // returning values 
  return (
    <div className="px-[7%]">
      <main className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 p-5">
        {reCars.map((car, index) => (
          <Car key={index} {...car} />
        ))}
      </main>
    </div>
  );
}

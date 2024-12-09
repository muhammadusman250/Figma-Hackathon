// Route for Category Page
"use client";

import React, { useState } from "react";
import { PCars, ReCars } from "@/components/Card/Card"; // data of local/manual API in Card component
import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Heart } from "lucide-react";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";



// type for cars
type cartype = "Sport" | "SUV" | "Sedan" | "Hatchback";

// function for filter functionality
export default function CarFilter() {
  // Variables for filtering the cars according to type,capacity and range
  const [typeFilter, setTypeFilters] = useState<cartype[]>([]);
  const [seatFilter, setSeatFilters] = useState<number[]>([]);
  const [maxRange, setMaxRange] = useState<number>(100);

  // Assembling all the cars from the two local APIs in card component
  const AllCars = [
    ...PCars().props.children.props.children,
    ...ReCars().props.children.props.children,
  ];
  type CarProps = {
    type: cartype;
    image: string; // image url
    name: string; // name of car
    seats: number; // Number of seats in the car
    price: number; // Price of the car
  };

  type Car = {
    props: CarProps;
  };

  // Filtering function with strong typing
  const Filtering = (cars: Car[]) => {
    return cars.filter((car) => {
      // Check if the car matches the type filter
      const matchesType =
        typeFilter.length === 0 || typeFilter.includes(car.props.type);
      // Check if the car matches the seat filter
      const matchesSeat =
        seatFilter.length === 0 || seatFilter.includes(car.props.seats);
      // Check if the car matches the price range filter
      const matchesRange = car.props.price <= maxRange;

      // Return true if all conditions match
      return matchesType && matchesSeat && matchesRange;
    });
  };

  // variable to make filter for all the cars
  const filteredCars = Filtering(AllCars);

  return (
    // returning with Html code
    <div>
      {/* Header Component */}
      <Header />
      {/* Sidebar section */}
      <div className="flex gap-6 px-[5%] max-md:px-[2%] p-6">
        <Card className="w-64 h-fit p-4 sticky max-sm:hidden">
          <div className="space-y-6">
            {/* Filter for organizing according to type like sport, sedan etc */}
            <div>
              <h3 className="text-sm font-semibold mb-3">TYPE</h3>
              <div className="space-y-2">
                {/* Array for Types of cars */}
                {["Sport", "SUV", "Sedan", "Hatchback"].map((type) => (
                  <div key={type} className="flex items-center space-x-2">
                    {/* Checkbox of Type*/}
                    <Checkbox
                      id={type}
                      checked={typeFilter.includes(type as cartype)}
                      onCheckedChange={(checked) => {
                        if (checked) {
                          setTypeFilters([...typeFilter, type as cartype]);
                        } else {
                          setTypeFilters(typeFilter.filter((t) => t !== type));
                        }
                      }}
                    />
                    <Label htmlFor={type}>{type}</Label>
                  </div>
                ))}
              </div>
            </div>
            {/* filter for capacity */}
            <div>
              <h3 className="text-sm font-semibold mb-3">CAPACITY</h3>
              <div className="space-y-2">
                {[2, 4, 6, 8].map((capacity) => (
                  <div key={capacity} className="flex items-center space-x-2">
                    <Checkbox
                      id={`capacity-${capacity}`}
                      checked={seatFilter.includes(capacity)}
                      onCheckedChange={(checked) => {
                        if (checked) {
                          setSeatFilters([...seatFilter, capacity]);
                        } else {
                          setSeatFilters(
                            seatFilter.filter((c) => c !== capacity)
                          );
                        }
                      }}
                    />
                    <Label htmlFor={`capacity-${capacity}`}>
                      {capacity} Person
                    </Label>
                  </div>
                ))}
              </div>
            </div>
            {/* filter for price */}
            <div>
              <h3 className="text-sm font-semibold mb-3">PRICE</h3>
              <input
                type="range"
                min="0"
                max="150"
                step="1"
                value={maxRange}
                onChange={(e) => setMaxRange(Number(e.target.value))}
                className="w-full"
              />
              <div className="mt-2 text-sm">Max. ${maxRange.toFixed(2)}</div>
            </div>
          </div>
        </Card>
        {/* template for cars */}
        <div className="flex-1">
          <div className="grid gap-4 lg:grid-cols-2 xl:grid-cols-3 px-10">
            {filteredCars.map((car, index) => (
              <Card
                key={index}
                className="p-4 shadow-lg hover:shadow-2xl hover:scale-105 duration-300"
              >
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h4 className="font-semibold mb-1">{car.props.name}</h4>
                    <h4 className="text-sm text-gray-500">{car.props.type} </h4>
                  </div>
                  <Button variant="ghost" size="icon" className="rounded-full">
                    <Heart />
                  </Button>
                </div>
                <img
                  src={car.props.image}
                  alt={car.props.name}
                  width={40}
                  height={40}
                  className="w-full h-40 object-contain my-4"
                />
                <div className="flex justify-evenly items-center mb-4 text-sm text-gray-600 font-bold">
                  <div className="items-center"> {car.props.seats} Seats</div>
                  <div className="items-center">${car.props.price}/day</div>
                  <Button className="bg-blue-600 px-5 mx-3">
                    <Link href="/">Rent Now</Link>
                  </Button>
                </div>
              </Card>
            ))}
          </div>
          {/* show more cars button */}
          <div className="text-center py-7">
            <Button className="bg-blue-600 px-5 mx-3">
              <Link href="/">Show more cars</Link>
            </Button>
            <div className="text-right text-gray-500 px-10">120 Cars</div>
          </div>
        </div>
      </div>
      {/* Footer component */}
      <Footer />
    </div>
  );
}

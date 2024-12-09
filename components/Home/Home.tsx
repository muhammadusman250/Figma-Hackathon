// Home Component
import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import { ArrowDownUpIcon, CircleStop } from "lucide-react";
import { PCars, ReCars } from "../Card/Card";

const Home = () => {
  return (
    // Ads Section
    <section>
      <div className="relative flex max-md:flex-col gap-28 max-xl:gap-12 max-lg:gap-2  justify-center items-center py-10 max-xl:py-5 max-md:py-3 px-[10%] max-xl:px-[5%] max-lg:px-[3%] max-md:px-[10%]">
        {/* Ad 1  */}
        <div className="relative w-full max-md:h-20vh">
          {/* Image */}
          <div>
          <Image
            alt="Ad"
            src="/Image01.jpg"
            width={550}
            height={550}
            className="brightness-50 rounded-xl max-md:h-[300]"
          /></div>
          {/* Text of Image */}
          <div className="absolute top-0 text-white font-semibold font-sans p-8 max-lg:p-5 max-md:p-8 text-3xl max-xl:text-xl max-md:text-2xl">
            The Best Platform <br /> for Car Rental
          </div>
          <div className="absolute top-20 text-white py-10 px-8 max-xl:top-16 max-lg:px-5 max-md:px-8 max-lg:top-12 max-md:top-16">
            Providing cheap car rental services
            <br /> and safe and comfortable facilities.
          </div>
          {/* Button */}
          <div className="absolute top-36 text-white py-14 px-10 max-xl:top-28 max-lg:top-24 max-md:top-40">
            <Button className="bg-blue-600 px-5 mx-3">
              <Link href="/new">Rental Car</Link>
            </Button>
          </div>
        </div>
        {/* Ad 2 */}
        <div className="relative w-full">
          {/* Image */}
          <Image
            alt="Ad"
            src="/Image02.jpg"
            width={550}
            height={550}
            className="brightness-75 rounded-xl max-md:h-[300]"
          />
          {/* Text of Image */}
          <div className="absolute top-0 text-white font-semibold font-sans p-8 max-lg:p-5 max-md:p-8 text-3xl max-xl:text-xl max-md:text-2xl">
            Easy way to rent a <br /> car at a low price
          </div>
          <div className="absolute top-20 text-white py-10 px-8 max-xl:top-16 max-lg:top-12 max-md:top-16">
            Ease of doing a car rental safely and
            <br /> reliably. Of course at a low price.
          </div>
          {/* button */}
          <div className="absolute top-36 text-white py-14 px-10 max-xl:top-28 max-lg:top-24 max-md:top-32">
            <Button className="bg-blue-600 px-5 mx-3">
              <Link href="/">Rental Car</Link>
            </Button>
          </div>
        </div>
      </div>
      {/* Pickup and Drop-off Section */}
      <div className="flex max-xl:flex-col justify-center gap-10 max-md:gap-3 items-center ">
        {/* Pickup Box */}
        <div className="shadow-xl border rounded-2xl px-3 ">
          {/* Heading */}
          <div className="flex py-3 max-sm:px-2">
            <CircleStop className="fill-blue-700 text-white" />
            <div className="pl-3"> Pick-Up</div>
          </div>
          {/* Content */}
          <div className="flex pt-2 pb-5">
            {/* Location List */}
            <div className="px-6 max-sm:px-2">
              <div>Loaction</div>
              <div>
                <select className="text-gray-500 text-sm">
                  <option defaultChecked>Select Your City</option>
                  <option>Karachi</option>
                  <option>Islamabad</option>
                  <option>Lahore</option>
                  <option>Peshawar</option>
                </select>
              </div>
            </div>
            {/* Date List */}
            <div className="border-l-2 px-6 max-sm:px-2 border-gray-500">
              <div>Date</div>
              <div>
                <select className="text-gray-500 text-sm">
                  <option defaultChecked>Select Your Date</option>
                  <option>23/july/24</option>
                  <option>24/july/24</option>
                  <option>25/july/24</option>
                  <option>26/july/24</option>
                </select>
              </div>
            </div>
            {/* Time List */}
            <div className="border-l-2 px-6 max-sm:px-2 border-gray-500">
              <div>Time</div>
              <div>
                <select className="text-gray-500 text-sm">
                  <option defaultChecked>Select Your Time</option>
                  <option>1pm</option>
                  <option>2pm</option>
                  <option>3pm</option>
                  <option>4pm</option>
                  <option>5pm</option>
                  <option>6pm</option>
                </select>
              </div>
            </div>
          </div>
        </div>
        <div>
          {" "}
          {/* Arrows box */}
          <div>
            <Button className="bg-blue-700">
              <ArrowDownUpIcon />
            </Button>
          </div>
        </div>
        {/* Drop-off Section */}
        <div>
          {/* Drop-off Box */}
          <div className="shadow-xl border rounded-2xl  px-2 max-sm:pl-[2%] ">
            {/* Heading */}
            <div className="flex py-3 max-sm:px-3">
              <CircleStop className="fill-blue-700 text-white" />
              <div className="pl-3"> Drop-off</div>
            </div>
            {/* Content */}
            <div className="flex pt-2 pb-5">
              {/* Location List */}
              <div className="px-6 max-sm:px-2">
                <div>Loaction</div>
                <div>
                  <select className="text-gray-500 text-sm">
                    <option defaultChecked>Select Your City</option>
                    <option>Karachi</option>
                    <option>Islamabad</option>
                    <option>Lahore</option>
                    <option>Peshawar</option>
                  </select>
                </div>
              </div>
              {/* Date List */}
              <div className="border-l-2 px-6 max-sm:px-2 border-gray-500">
                <div>Date</div>
                <div>
                  <select className="text-gray-500 text-sm">
                    <option defaultChecked>Select Your Date</option>
                    <option>23/july/24</option>
                    <option>24/july/24</option>
                    <option>25/july/24</option>
                    <option>26/july/24</option>
                  </select>
                </div>
              </div>
              {/* Time List */}
              <div className="border-l-2 px-6 max-sm:px-2 border-gray-500">
                <div>Time</div>
                <div>
                  <select className="text-gray-500 text-sm">
                    <option defaultChecked>Select Your Time</option>
                    <option>1pm</option>
                    <option>2pm</option>
                    <option>3pm</option>
                    <option>4pm</option>
                    <option>5pm</option>
                    <option>6pm</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Popular Cars Section*/}
      <div>
        <div className="text-gray-500 px-[10%] pt-10">Popular Cars</div>
        <div className="text-right px-[10%] text-blue-900 underline"><Link href="/more">View All </Link></div>
        {/* Cars */}
        <div>
          <PCars />
        </div>
        {/* Recommended Cars Section */}
        <div className="text-gray-500 px-[10%] pt-10">Recommended Cars</div>
        <div>
          <ReCars />
        </div>
        {/* Show more Button */}
        <div className="text-center py-5">
          <Button className="bg-blue-600 px-5 mx-3">
            <Link href="/more">Show more cars</Link>
          </Button>
          <div className="text-right text-gray-500 px-10">120 Cars</div>
        </div>
      </div>
    </section>
  );
};

export default Home;

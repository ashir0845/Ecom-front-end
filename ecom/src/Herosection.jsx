import React from "react";
import { ShoppingBag } from "lucide-react";
import { Heart } from "lucide-react";
import { User } from "lucide-react";
import { BadgeCheck } from "lucide-react";
import { FaArrowLeft, FaArrowRight, FaShoppingCart } from "react-icons/fa";
import { useRef } from "react";
import { useState } from "react";
import { Plus, Minus, Headphones } from "lucide-react";
const products = [
  {
    name: "ALYA SKIN CLEANSER.",
    price: "$29.99",
    image: "/alya.png",
  },
  {
    name: "RITUAL OF SAKURA.",
    price: "$27.99",
    image: "/ritual.png",
  },
  {
    name: "THE BODY LOTION.",
    price: "$19.99",
    image: "/body.png",
  },
];
const FAQItem = ({ question, answer, isOpen, onClick }) => (
  <div className="border rounded-lg p-4 mb-2 bg-white">
    <div
      className="flex justify-between items-center cursor-pointer"
      onClick={onClick}
    >
      <p className="text-gray-800 font-medium">{question}</p>
      {isOpen ? <Minus size={20} /> : <Plus size={20} />}
    </div>
    {isOpen && answer && <p className="text-sm text-gray-600 mt-2">{answer}</p>}
  </div>
);
export default function HeroSection() {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === "left" ? -300 : 300,
        behavior: "smooth",
      });
    }
  };
  const [openIndex, setOpenIndex] = useState(1);

  const faqData = [
    {
      question: "Are your products safe for sensitive skin?",
      answer: "",
    },
    {
      question: "Are your products cruelty-free?",
      answer:
        "Absolutely! All our products are cruelty-free, and most are vegan. Check individual product details for specifics.",
    },
    {
      question: "What’s your return policy?",
      answer: "",
    },
    {
      question: "Do you ship internationally?",
      answer: "",
    },
    {
      question: "How do i choose the right product?",
      answer: "",
    },
  ];

  return (
    <div className="font-inter">
      <section className="bg-[#EFF5E1] min-h-screen font-sans px-6 md:px-20 py-10 relative overflow-hidden">
        <header className="flex justify-between items-center mb-12 z-10 relative">
          <h1 className="text-xl font-extrabold text-[#2D3B36]">SKINCARE</h1>
          <nav className="space-x-6 text-gray-700 hidden md:block text-[#2D3B36]">
            <a href="#">All Products</a>
            <a href="#">Serum</a>
            <a href="#">Sunscreen</a>
            <a href="#">Bundle</a>
          </nav>
          <div className="flex space-x-4">
            <a href="#">
              <ShoppingBag className="w-6 h-6 color-[#2b2d36]" />{" "}
            </a>
            <a href="#" className="color-[#2b2d36] hover:scale-110 transition">
              <Heart className="w-6 h-6" />
            </a>
            <a href="#">
              <User className="w-6 h-6 color-[#2b2d36]" />
            </a>
          </div>
        </header>

        <h1 className="absolute text-[160px] md:text-[190px] font-bold text-[#2D3B36] opacity-100 top-[81%] left-[50%] -translate-x-1/2 -translate-y-1/2 whitespace-nowrap z-0 scale-x-[1.6] scale-y-[1.4]">
          SKINCARE
        </h1>

        <p className="absolute -bottom-[-480px] text-[#2D3B36] max-w-md mb-4 md:text-left">
          Transform your skincare <br />
          routine with premium products that
          <br /> restore, protect, and enhance your
          <br /> natural glow every day.
        </p>

        <img
          src="/plum.png"
          alt="Skincare"
          className=" absolute right-10 rounded-3xl  md:w-[150px] h-[150px] object-cover border-4"
        />

        <div className="relative z-10 flex flex-col items-center text-center">
          <h2 className="text-5xl md:text-6xl font-bold text-[#2D3B36] leading-tight mb-6">
            GLOW <br /> NATUR-
            <br />
            ALLY
          </h2>

          <div className="relative">
            <img
              src="/hero.png"
              alt="Skincare"
              className="rounded-3xl w-72 md:w-96 h-[400px] object-cover  border-4 "
            />

            <div className="absolute -bottom-[-20px] left-1/2 transform -translate-x-1/2 bg-white rounded-full px-4 py-2 flex items-center shadow-md min-w-[320px] max-w-[90%]">
              <img
                src="/plum.png"
                alt="icon"
                className="w-12 h-10 rounded-full object-cover"
              />
              <span className="text-sm text-gray-700 ">
                While giving you an invigorating cleansing experience.
              </span>
            </div>
          </div>

          <button className="absolute left-10 -top-[-250px]  bg-[#2b2d36] text-white px-6 py-2 rounded-full mt-10 hover:bg-gray-800">
            Shop Now
          </button>
        </div>
      </section>
      <section className="bg-[#FEFFF4] py-16 px-6 md:px-20">
        <p className=" max-w-4xl mx-auto text-left text-[#2d3b36] text-lg md:text-xl leading-relaxed mb-12">
          Experience the ultimate in skincare with our expertly formulated
          products, crafted to nourish, protect, and rejuvenate your skin.
          Combining the finest natural ingredients with advanced science, our
          collection ensures{" "}
          <span className="opacity-50">
            every skin type can achieve a radiant, healthy glow. Embrace your
            beauty with confidence every day. Experience the ultimate with our
            expertly formulated products, crafted to nourish, protect, and
            rejuvenate your skin.
          </span>
        </p>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="space-y-8">
            <button className="border border-gray-600 px-4 py-1.5 rounded-full text-sm hover:bg-gray-100 transition">
              ● Why Our Products
            </button>

            <div>
              <h2 className="text-2xl text-[#2b2d36] md:text-6xl  mb-2">
                YOUR SKIN DESERVES <br />
                THE BEST CARE.
              </h2>
              <p className="text-[#525349] text-lg max-w-md ">
                Discover a curated collection of skincare products designed to
                rejuvenate, protect, and pamper your skin. Explore our range
                crafted with love backed by science, and inspired by nature.
              </p>
            </div>

            <div className="space-y-4 text-lg">
              <div>
                <h3 className="text-lg md:text-6xl text-[#2b2d36] ">
                  <span className="text-transparent bg-gradient-to-b from-[#2b2d36] to-transparent bg-clip-text">
                    01
                  </span>{" "}
                  Bio Ingredients
                </h3>
                <p className="text-[#525349] ml-[85px] mt-[30px]">
                  Get naturally beautiful and transform with our bio <br />{" "}
                  ingredients creams for healthy, radiant skin.
                </p>
              </div>
              <div>
                <h3 className="text-lg md:text-6xl text-[#2b2d36] ">
                  <span className="text-transparent bg-gradient-to-b from-[#2b2d36] to-transparent bg-clip-text">
                    02
                  </span>{" "}
                  Everything Natural
                </h3>
                <p className="text-gray-600 ml-[85px] mt-[30px]">
                  Pure ingredients for pure skin. The perfect solution
                  <br /> for your skin care needs.
                </p>
              </div>
              <div>
                <h3 className="text-lg md:text-6xl text-[#2b2d36] ">
                  <span className="text-transparent bg-gradient-to-b from-[#2b2d36] to-transparent bg-clip-text">
                    03
                  </span>{" "}
                  All Handmade
                </h3>
                <p className="text-gray-600 ml-[85px] mt-[30px]">
                  Made with love and care. Just for you. Give your skin <br />{" "}
                  the tender loving care it deserves.
                </p>
              </div>
            </div>
          </div>

          <div className="absolute right-20 top-[1000px] w-[650px]">
            <div className="relative">
              <img
                src="/eye.png"
                alt="Skincare model"
                className="w-full h-auto rounded-2xl object-cover shadow-lg"
              />

              <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 bg-[#EEF0DE] px-4 py-2 rounded-full flex items-center gap-3 shadow-md">
                <div className="w-8 h-8 rounded-full bg-[#2D3B36] flex items-center justify-center">
                  <BadgeCheck className="w-4 h-4 text-white" />
                </div>

                <span className="text-sm text-[#2D3B36] font-medium">
                  Best Skin Care Product <br className="hidden sm:block" />{" "}
                  Award Winning
                </span>
              </div>
            </div>

            <div className="flex justify-between text-sm text-gray-600 mt-4">
              <span>SINCE 2001</span>
              <span className="underline cursor-pointer">LEARN MORE</span>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-[#FEFFF4] py-16 px-6 md:px-16">
        <div className="flex justify-between items-center mb-8">
          <button className="bg-[#EEF0DE] px-4 py-1 rounded-full text-sm font-medium text-[#2d3b36] border border-[#2d3b36]">
            ● Best Selling Products
          </button>
          <h2 className="text-center text-2xl md:text-5xl text-[#2d3b36]  mb-5 ">
            Skincare That Brings Out <br /> Your Natural Radiance
          </h2>
          <div className="flex gap-4">
            <button
              onClick={() => scroll("left")}
              className="p-2 border rounded-full"
            >
              <FaArrowLeft />
            </button>
            <button
              onClick={() => scroll("right")}
              className="p-2 border rounded-full bg-[#2d3b36] text-white"
            >
              <FaArrowRight />
            </button>
          </div>
        </div>

        <div className="flex justify-center">
          <div
            ref={scrollRef}
            className="flex gap-8 overflow-x-auto pb-2 px-4 w-full max-w-screen-xl justify-center"
          >
            {products.map((product, index) => (
              <div
                key={index}
                className="min-w-[300px]  bg-white rounded-2xl overflow-hidden shadow-md flex-shrink-0"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-[300px] object-cover"
                />
                <div className="flex justify-between items-center px-4 py-3 bg-[#EEF0DE]">
                  <div>
                    <h4 className="text-[#2d3b36] text-sm font-semibold">
                      {product.name}
                    </h4>
                    <p className="text-xs text-gray-600">
                      FROM {product.price}
                    </p>
                  </div>
                  <div className="bg-[#2d3b36] p-2 rounded-lg">
                    <FaShoppingCart className="text-white text-sm" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-[#FEFFF4] py-12 px-4 flex justify-center">
        <div className="relative w-full max-w-5xl rounded-3xl overflow-hidden shadow-lg">
          <img
            src="/leaf.png"
            alt="Hero"
            className="w-full h-auto object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent"></div>
          <div className="absolute inset-0 flex flex-col justify-end items-center text-center pb-12 px-4">
            <h2 className="text-white text-2xl md:text-4xl font-medium mb-4 leading-snug">
              Feel Beautiful Inside and Out
              <br />
              with Every Product.
            </h2>
            <button className="mt-2 bg-white text-[#2d3b36] font-semibold py-2 px-6 rounded-full hover:scale-105 transition">
              Shop Now
            </button>
          </div>
        </div>
      </section>
      <section className="bg-[#FEFFF4] py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl text-[#2d3b36] font-medium mb-6">
            Feel Beautiful Inside and Out <br /> with Every Product.
          </h2>

          {/* Category Filters */}
          <div className="flex flex-wrap justify-center gap-4 mb-10">
            <button className="bg-[#2d3b36] text-white text-sm font-medium px-4 py-2 rounded-full">
              NEW ARRIVAL
            </button>
            <button className="border border-gray-400 text-sm font-medium px-4 py-2 rounded-full">
              CLEANSING
            </button>
            <button className="border border-gray-400 text-sm font-medium px-4 py-2 rounded-full">
              ACNE FIGHTER
            </button>
            <button className="border border-gray-400 text-sm font-medium px-4 py-2 rounded-full">
              ANTI AGGING
            </button>
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl overflow-hidden shadow-md"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-[340px] object-cover"
                />
                <div className="flex justify-between items-center px-4 py-3 bg-[#EEF0DE]">
                  <div>
                    <h4 className="text-[#2d3b36] text-sm font-semibold mb-1">
                      {product.name}
                    </h4>
                    <p className="text-xs text-gray-600">
                      FROM {product.price}
                    </p>
                  </div>
                  <div className="bg-[#2d3b36] p-2 rounded-lg">
                    <FaShoppingCart className="text-white text-sm" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <div className="min-h-screen bg-[#FAFDF3] py-16 px-6 md:px-20 grid md:grid-cols-2 gap-12 font-inter text-[#2D3B36]">
        <div className="relative flex justify-center">
          <img
            src="/body.png"
            alt="Body Lotion"
            className="rounded-2xl w-[50%] md:w-[70%] object-cover"
          />
          <div className="absolute bottom-4 left-30 bg-[#EDF4DB] flex items-center gap-3 py-2 px-4 rounded-full shadow-md">
            <div className="bg-[#2D3B36] p-1.5 rounded-full">
              <Headphones size={16} color="white" />
            </div>
            <p className="text-sm font-medium ">24/7 We’re Here to Help You</p>
          </div>
        </div>

        <div>
          <div className="mb-6">
            <span className="inline-flex items-center gap-2 px-3 py-1 text-lg rounded-full border border-[#2D3B36]">
              <span className="w-2 h-2 rounded-full bg-[#2D3B36]"></span>{" "}
              Frequently Asked Question
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl text-lg mb-8 leading-snug">
            Answers to Your
            <br /> Skincare Questions, All <br /> in One Place.
          </h2>

          {faqData.map((item, idx) => (
            <FAQItem
              key={idx}
              question={item.question}
              answer={item.answer}
              isOpen={openIndex === idx}
              onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
            />
          ))}
        </div>
      </div>
      <footer className="relative bg-[#2b2d36] text-white py-20 px-6 md:px-24 overflow-hidden">
        {/* Background SKINCARE text */}
        <div className="absolute bottom-[-20px] left-0 w-full text-[22vw] font-extrabold text-white opacity-5 leading-none tracking-tight whitespace-nowrap pointer-events-none select-none z-0">
          SKINCARE
        </div>

        {/* Foreground Content */}
        <div className="relative z-10 grid md:grid-cols-2 gap-10 mb-16">
          <div>
            <h2 className="text-4xl font-medium leading-snug">
              Join The Skincare <br /> Community Now.
            </h2>
          </div>
          <div className="text-right">
            <p className="text-base text-gray-300 mb-1">Get in Touch</p>
            <p className="text-2xl font-medium">contact.skincare.com</p>
          </div>
        </div>

        <div className="relative z-10 flex flex-wrap justify-between text-sm text-gray-400 border-t border-[#3a3b45] pt-10">
          <div className="flex gap-10 mb-4 md:mb-0">
            <a href="#">Facebook</a>
            <a href="#">Instagram</a>
            <a href="#">YouTube</a>
          </div>
          <div className="flex gap-10">
            <a href="#">Terms of Service</a>
            <a href="#">Privacy Policy</a>
            <a href="#">Cookies Policy</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

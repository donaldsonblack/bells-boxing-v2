"use client";

import { motion } from "motion/react";
import { Navbar } from "@/components/navbar";
import { useState } from "react";

export default function SchedulePage() {
  const classes = [
    {
      name: "Beginner Boxing",
      description:
        "Learn the fundamentals of boxing in a supportive environment. Focus on proper form, basic combinations, and conditioning.",
      level: "Beginner",
      duration: "60 min",
      popular: false,
    },
    {
      name: "Old School Boxing",
      description:
        "Traditional boxing training focusing on fundamentals and technique. Our most popular class for all skill levels.",
      level: "All Levels",
      duration: "60 min",
      popular: true,
    },
    {
      name: "Boxing Bootcamp",
      description:
        "High-intensity workout combining boxing with fitness training. Perfect for building strength and endurance.",
      level: "All Levels",
      duration: "60 min",
      popular: false,
    },
    {
      name: "Advanced Boxing",
      description:
        "For experienced boxers looking to refine technique, advanced combinations, and sparring preparation.",
      level: "Advanced",
      duration: "60 min",
      popular: false,
    },
    {
      name: "Conditioning",
      description:
        "Boxing-specific strength and conditioning workout. Build the fitness foundation needed for serious training.",
      level: "All Levels",
      duration: "60 min",
      popular: false,
    },
  ];

  const allClasses = [
    // Monday
    {
      day: "MON",
      time: "9:15 AM - 10:00 AM",
      name: "Beginner Boxing",
      level: "Beginner",
      trainer: "Greg",
      popular: false,
    },
    {
      day: "MON",
      time: "5:00 PM - 6:00 PM",
      name: "Old School Boxing",
      level: "All Levels",
      trainer: "Greg",
      popular: false,
    },
    {
      day: "MON",
      time: "6:00 PM - 7:00 PM",
      name: "Boxing Bootcamp",
      level: "All Levels",
      trainer: "Greg",
      popular: false,
    },
    {
      day: "MON",
      time: "7:00 PM - 8:00 PM",
      name: "Advanced Boxing",
      level: "Advanced",
      trainer: "Greg",
      popular: false,
    },
    // Tuesday
    {
      day: "TUE",
      time: "6:00 AM - 7:00 AM",
      name: "Beginner Boxing",
      level: "Beginner",
      trainer: "Greg",
      popular: false,
    },
    {
      day: "TUE",
      time: "9:15 AM - 10:00 AM",
      name: "Beginner Boxing",
      level: "Beginner",
      trainer: "Greg",
      popular: false,
    },
    {
      day: "TUE",
      time: "5:00 PM - 6:00 PM",
      name: "Old School Boxing",
      level: "All Levels",
      trainer: "Greg",
      popular: true,
    },
    {
      day: "TUE",
      time: "6:00 PM - 7:00 PM",
      name: "Beginner Boxing",
      level: "Beginner",
      trainer: "Greg",
      popular: false,
    },
    {
      day: "TUE",
      time: "7:00 PM - 8:00 PM",
      name: "Conditioning",
      level: "All Levels",
      trainer: "Greg",
      popular: false,
    },
    // Wednesday
    {
      day: "WED",
      time: "9:15 AM - 10:00 AM",
      name: "Beginner Boxing",
      level: "Beginner",
      trainer: "Greg",
      popular: false,
    },
    {
      day: "WED",
      time: "5:00 PM - 6:00 PM",
      name: "Old School Boxing",
      level: "All Levels",
      trainer: "Greg",
      popular: false,
    },
    {
      day: "WED",
      time: "6:00 PM - 7:00 PM",
      name: "Boxing Bootcamp",
      level: "All Levels",
      trainer: "Greg",
      popular: false,
    },
    {
      day: "WED",
      time: "7:00 PM - 8:00 PM",
      name: "Advanced Boxing",
      level: "Advanced",
      trainer: "Greg",
      popular: false,
    },
    // Thursday
    {
      day: "THU",
      time: "6:00 AM - 7:00 AM",
      name: "Beginner Boxing",
      level: "Beginner",
      trainer: "Greg",
      popular: false,
    },
    {
      day: "THU",
      time: "9:15 AM - 10:00 AM",
      name: "Beginner Boxing",
      level: "Beginner",
      trainer: "Greg",
      popular: false,
    },
    {
      day: "THU",
      time: "5:00 PM - 6:00 PM",
      name: "Old School Boxing",
      level: "All Levels",
      trainer: "Greg",
      popular: false,
    },
    {
      day: "THU",
      time: "6:00 PM - 7:00 PM",
      name: "Beginner Boxing",
      level: "Beginner",
      trainer: "Greg",
      popular: false,
    },
    {
      day: "THU",
      time: "7:00 PM - 8:00 PM",
      name: "Conditioning",
      level: "All Levels",
      trainer: "Greg",
      popular: false,
    },
    // Friday
    {
      day: "FRI",
      time: "9:15 AM - 10:00 AM",
      name: "Beginner Boxing",
      level: "Beginner",
      trainer: "Greg",
      popular: false,
    },
    {
      day: "FRI",
      time: "5:00 PM - 6:00 PM",
      name: "Old School Boxing",
      level: "All Levels",
      trainer: "Greg",
      popular: false,
    },
    // Saturday
    {
      day: "SAT",
      time: "6:00 AM - 7:00 AM",
      name: "Old School Boxing",
      level: "All Levels",
      trainer: "Greg",
      popular: false,
    },
    {
      day: "SAT",
      time: "9:15 AM - 10:00 AM",
      name: "Beginner Boxing",
      level: "Beginner",
      trainer: "Greg",
      popular: false,
    },
  ];

  const [selectedDay, setSelectedDay] = useState("MON");
  const days = ["MON", "TUE", "WED", "THU", "FRI", "SAT"];

  const filteredClasses = allClasses.filter((c) => c.day === selectedDay);

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-background pt-20">
        {/* Hero Section */}
        <section className="relative py-24 bg-gradient-to-b from-black via-zinc-950 to-background">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent" />

          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center space-y-6"
            >
              <h1 className="font-bebas text-7xl md:text-8xl lg:text-9xl">
                CLASS <span className="text-primary">SCHEDULE</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Find the perfect class for your fitness level and goals. All classes include
                warmup, technique work, pad work, and conditioning.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Weekly Schedule Section */}
        <section className="py-24 bg-zinc-900/50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6 }}
              className="text-center space-y-6 mb-16"
            >
              <h2 className="font-bebas text-6xl md:text-7xl">
                WEEKLY <span className="text-primary">SCHEDULE</span>
              </h2>
              <div className="w-24 h-1 bg-primary mx-auto" />
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Classes run throughout the week. Drop in anytime or reserve your spot online.
              </p>
            </motion.div>

            {/* Day Selector */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6 }}
              className="flex justify-center gap-4 mb-12 flex-wrap"
            >
              {days.map((day) => (
                <button
                  key={day}
                  onClick={() => setSelectedDay(day)}
                  className={`px-8 py-3 font-bebas text-lg tracking-wider transition-all ${
                    selectedDay === day
                      ? "bg-zinc-900 text-foreground border-b-2 border-primary"
                      : "bg-transparent text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {day}
                </button>
              ))}
            </motion.div>

            {/* Class Cards */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6 }}
              className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto"
            >
              {filteredClasses.map((classItem, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className={`relative bg-zinc-900 border-2 p-6 space-y-4 ${
                    classItem.popular ? "border-primary" : "border-border"
                  }`}
                >
                  {classItem.popular && (
                    <div className="absolute top-0 right-0 bg-primary text-primary-foreground px-3 py-1 text-xs font-bebas tracking-wider transform rotate-45 translate-x-8 -translate-y-2">
                      POPULAR
                    </div>
                  )}

                  <div className="flex items-start gap-2 text-primary text-sm">
                    <span>🕐</span>
                    <span>{classItem.time}</span>
                  </div>

                  <h3 className="font-bebas text-2xl text-foreground leading-tight">
                    {classItem.name}
                  </h3>

                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <span className="text-primary">🥊</span>
                      <span>{classItem.level}</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <span className="text-primary">👤</span>
                      <span>Trainer: {classItem.trainer}</span>
                    </div>
                  </div>

                  <button className="w-full border border-primary text-primary hover:bg-primary hover:text-primary-foreground py-2 font-bebas tracking-wider transition-all">
                    RESERVE
                  </button>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Class Information Section */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 max-w-7xl mx-auto items-start">
              {/* Left Column - Class Information */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6 }}
                className="space-y-8"
              >
                <div>
                  <h2 className="font-bebas text-5xl md:text-6xl mb-6">
                    CLASS <span className="text-primary">INFORMATION</span>
                  </h2>
                  <div className="w-24 h-1 bg-primary mb-8" />
                </div>

                {/* Class Types */}
                <div className="space-y-4">
                  <h3 className="font-bebas text-3xl">Class Types</h3>
                  <div className="space-y-3 text-muted-foreground">
                    <p>
                      <span className="text-primary font-semibold">Beginner Boxing:</span> Perfect for newcomers. Learn basic techniques, footwork, and conditioning.
                    </p>
                    <p>
                      <span className="text-blue-400 font-semibold">Old School Boxing:</span> Traditional boxing training focusing on fundamentals and technique.
                    </p>
                    <p>
                      <span className="text-green-400 font-semibold">Boxing Bootcamp:</span> High-intensity workout combining boxing with fitness training.
                    </p>
                    <p>
                      <span className="text-orange-400 font-semibold">Advanced Boxing:</span> For experienced boxers. Advanced techniques and sparring preparation.
                    </p>
                    <p>
                      <span className="text-yellow-400 font-semibold">Conditioning:</span> Strength and conditioning focused on boxing-specific fitness.
                    </p>
                  </div>
                </div>

                {/* What to Bring */}
                <div className="space-y-4">
                  <h3 className="font-bebas text-3xl">What to Bring</h3>
                  <p className="text-muted-foreground">
                    Hand wraps are recommended but not necessary to start, water bottle, and comfortable workout clothes. Boxing gloves are provided for beginners, but we recommend getting your own.
                  </p>
                </div>

                {/* Reservations */}
                <div className="space-y-4">
                  <h3 className="font-bebas text-3xl">Reservations</h3>
                  <p className="text-muted-foreground mb-6">
                    We recommend booking in advance as classes can fill up quickly, especially evening sessions.
                  </p>
                  <button className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 font-bebas text-lg tracking-wider transition-all hover:scale-105">
                    BOOK A CLASS
                  </button>
                </div>
              </motion.div>

              {/* Right Column - Timetable Image */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6 }}
                className="relative"
              >
                <div className="relative bg-gradient-to-br from-zinc-900 to-black p-6 border-2 border-primary/20">
                  <h3 className="font-bebas text-3xl text-center mb-4">
                    Official <span className="text-primary">Timetable</span>
                  </h3>
                  <div className="w-full bg-zinc-950 rounded border border-zinc-800 overflow-hidden">
                    <img
                      src="/timetable.jpg"
                      alt="Bells Boxing Classes Timetable"
                      className="w-full h-auto"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                        e.currentTarget.parentElement!.innerHTML = '<div class="p-12 text-center text-muted-foreground"><p>Timetable image will be displayed here</p><p class="text-sm mt-2">Please add timetable.jpg to the public folder</p></div>';
                      }}
                    />
                  </div>
                  <p className="text-center text-muted-foreground mt-4">
                    Check out our complete weekly schedule with all class times and types.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-gradient-to-b from-zinc-950 to-black">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl mx-auto text-center space-y-8 bg-card border-2 border-primary p-12"
            >
              <h2 className="font-bebas text-6xl md:text-7xl">
                FIRST CLASS <span className="text-primary">FREE</span>
              </h2>

              <p className="text-lg md:text-xl text-muted-foreground">
                Try any class for free. No strings attached. Come experience the Bells Boxing
                difference.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-primary hover:bg-primary/90 text-primary-foreground px-10 py-5 text-xl font-bebas tracking-wider transition-all hover:scale-105">
                  BOOK FREE CLASS
                </button>
                <button className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground px-10 py-5 text-xl font-bebas tracking-wider transition-all hover:scale-105">
                  VIEW PRICING
                </button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-black text-foreground py-12 border-t border-primary/20">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-4 gap-8">
              <div className="space-y-4">
                <h3 className="font-bebas text-3xl">
                  BELLS <span className="text-primary">BOXING</span>
                </h3>
                <p className="text-muted-foreground">
                  Elite boxing training and fitness for all levels.
                </p>
              </div>

              <div className="space-y-4">
                <h4 className="font-bebas text-xl text-primary">HOURS</h4>
                <div className="text-muted-foreground space-y-2">
                  <p>All Days: 5:00 AM - 9:00 PM</p>
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="font-bebas text-xl text-primary">CONTACT</h4>
                <div className="text-muted-foreground space-y-2">
                  <p>Email: greg@bellsboxing.com</p>
                  <p>Phone: 0 407 581 872</p>
                  <p>Address: 116 Fyans St, South Geelong VIC 3220</p>
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="font-bebas text-xl text-primary">FOLLOW US</h4>
                <div className="flex gap-4">
                  <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                    Instagram
                  </a>
                  <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                    Facebook
                  </a>
                  <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                    Twitter
                  </a>
                </div>
              </div>
            </div>

            <div className="border-t border-primary/20 mt-12 pt-8 text-center text-muted-foreground">
              <p>&copy; {new Date().getFullYear()} Bells Boxing. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </main>
    </>
  );
}

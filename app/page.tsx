"use client";

import { Navbar } from "@/components/navbar";

export default function Home() {
  const classes = [
    { name: "Early Morning Sessions", time: "6:00 AM - 7:00 AM", days: "Tue, Thu, Sat" },
    { name: "Morning Classes", time: "9:15 AM - 10:00 AM", days: "Mon - Sat" },
    { name: "Evening Sessions", time: "5:00 PM - 8:00 PM", days: "Mon - Fri" },
    { name: "Weekend Training", time: "6:00 AM - 10:00 AM", days: "Sat" },
  ];

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-background">
        {/* Hero Section */}
        <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-zinc-950/80 to-zinc-950" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center space-y-8">
            <h1 className="font-bebas text-8xl md:text-9xl lg:text-[12rem] leading-none">
              <span className="text-foreground">BELLS</span>
              <br />
              <span className="text-primary">BOXING</span>
            </h1>

            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
              Train like a champion. Fight like a warrior. Transform your life.
            </p>

            <div className="flex gap-4 justify-center flex-wrap">
              <button className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 text-lg font-bebas tracking-wider transition-all hover:scale-105">
                START YOUR JOURNEY
              </button>
              <button className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-4 text-lg font-bebas tracking-wider transition-all hover:scale-105">
                VIEW SCHEDULE
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-24 bg-gradient-to-b from-background via-zinc-950 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h2 className="font-bebas text-6xl md:text-7xl text-foreground">
              ABOUT <span className="text-primary">US</span>
            </h2>

            <div className="w-24 h-1 bg-primary mx-auto" />

            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              At Bells Boxing, we&apos;re more than just a gym—we&apos;re a community of fighters,
              dreamers, and champions. Founded in 2024 with a passion for the sweet science, we provide
              world-class training for everyone from complete beginners to competitive athletes.
            </p>

            <div className="grid md:grid-cols-3 gap-8 pt-12">
              <div className="space-y-2">
                <div className="text-5xl font-bebas text-primary">10+</div>
                <div className="text-muted-foreground">Years Experience</div>
              </div>

              <div className="space-y-2">
                <div className="text-5xl font-bebas text-primary">500+</div>
                <div className="text-muted-foreground">Active Members</div>
              </div>

              <div className="space-y-2">
                <div className="text-5xl font-bebas text-primary">15</div>
                <div className="text-muted-foreground">Expert Coaches</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Class Schedule Section */}
      <section id="schedule" className="py-24 bg-zinc-900/50">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-6 mb-16">
            <h2 className="font-bebas text-6xl md:text-7xl text-foreground">
              CLASS <span className="text-primary">SCHEDULE</span>
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto" />
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Find the perfect time to train. All classes include warmup, technique work,
              pad work, and conditioning.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {classes.map((classItem, index) => (
              <div
                key={index}
                className="bg-background border-2 border-border hover:border-primary p-6 space-y-4 transition-all"
              >
                <h3 className="font-bebas text-3xl text-primary">{classItem.name}</h3>
                <div className="space-y-2 text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <span className="text-foreground font-semibold">Time:</span>
                    <span>{classItem.time}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-foreground font-semibold">Days:</span>
                    <span>{classItem.days}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-24 bg-gradient-to-b from-zinc-950 via-primary/5 to-black">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8 bg-card border-2 border-primary p-12">
            <h2 className="font-bebas text-6xl md:text-7xl text-foreground">
              READY TO <span className="text-primary">BEGIN?</span>
            </h2>

            <p className="text-lg md:text-xl text-muted-foreground">
              Join Bells Boxing today and start your transformation. First class is free—
              no strings attached. Come see what makes us different.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-primary hover:bg-primary/90 text-primary-foreground px-10 py-5 text-xl font-bebas tracking-wider transition-all hover:scale-105">
                GET STARTED NOW
              </button>
              <button className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground px-10 py-5 text-xl font-bebas tracking-wider transition-all hover:scale-105">
                CONTACT US
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-black text-foreground py-12 border-t border-primary/20">
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

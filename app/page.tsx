"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Users,
  School,
  TrendingUp,
  Award,
  CheckCircle,
  Star,
  BookOpen,
  Briefcase,
  Code,
  Lightbulb,
  Play,
  MousePointer,
} from "lucide-react";
import Link from "next/link";
import { VideoModal } from "@/components/video-modal";

const scrollingStyle = `
  @keyframes scroll {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(-50%);
    }
  }

  .animate-scroll {
    animation: scroll 30s linear infinite;
  }

  .scrollable-container {
    overflow-x: auto;
    scrollbar-width: thin;
    scrollbar-color: #cbd5e1 #f1f5f9;
  }

  .scrollable-container::-webkit-scrollbar {
    height: 6px;
  }

  .scrollable-container::-webkit-scrollbar-track {
    background: #f1f5f9;
    border-radius: 3px;
  }

  .scrollable-container::-webkit-scrollbar-thumb {
    background: #cbd5e1;
    border-radius: 3px;
  }

  .scrollable-container::-webkit-scrollbar-thumb:hover {
    background: #94a3b8;
  }
`;

export default function IBSRAPortfolio() {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      <style dangerouslySetInnerHTML={{ __html: scrollingStyle }} />
      {/* Hero Section with Clickable Video */}
      <section className="relative h-screen w-full overflow-hidden">
        {/* Background Video */}
        <div
          className="absolute inset-0 w-full h-full cursor-pointer group"
          onClick={() => setIsVideoModalOpen(true)}
        >
          <iframe
            src="https://www.youtube.com/embed/1_2yEb1F9G8?autoplay=0&mute=1&loop=1&playlist=1_2yEb1F9G8&controls=0&showinfo=0&rel=0&iv_load_policy=3&modestbranding=1"
            className="w-full h-full object-cover pointer-events-none"
            allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="IBSRA Hero Video"
          />
          <div className="absolute inset-0 bg-black/60 group-hover:bg-black/50 transition-colors duration-300" />

          {/* Click to Play Indicator */}
          <div className="absolute bottom-8 right-8 flex items-center gap-2 text-white/80 text-sm animate-pulse">
            <MousePointer className="w-4 h-4" />
            <span>Click to watch demo</span>
          </div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 flex items-center justify-center h-full text-center text-white px-4 pointer-events-none">
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="space-y-4">
              <Badge className="bg-blue-600/80 text-white border-blue-400">
                Certified by Google & Microsoft
              </Badge>
              <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white drop-shadow-2xl">
                Learn. Earn. With IBSRA.
              </h1>
              <p className="text-xl md:text-2xl text-gray-100 max-w-3xl mx-auto leading-relaxed drop-shadow-lg">
                IBSRA is the first EdTech company that helps students build
                their first income source by combining technical skills,
                business knowledge, and personal branding.
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5" />
                <span>10,000+ Students</span>
              </div>
              <div className="flex items-center gap-2">
                <School className="w-5 h-5" />
                <span>40+ Partner Schools</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="w-5 h-5" />
                <span>Google & Microsoft Certified</span>
              </div>
            </div>

            {/* Demo Video CTA */}
            <div className="mt-8 pointer-events-auto">
              <Button
                onClick={() => setIsVideoModalOpen(true)}
                variant="outline"
                size="lg"
                className="border-2 border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black font-semibold px-8 py-4 text-lg shadow-lg bg-black/20 backdrop-blur-sm animate-pulse"
              >
                <Play className="w-5 h-5 mr-2" />
                Watch Our Demo Video
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Video Modal */}
      <VideoModal
        isOpen={isVideoModalOpen}
        onClose={() => setIsVideoModalOpen(false)}
      />

      {/* Educational Programs Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Educational Programs
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive programs designed to build careers, not just skills
            </p>
          </div>

          <div className="space-y-20">
            {/* Discovery Program */}
            <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <div className="grid md:grid-cols-2 gap-0">
                <CardContent className="p-12 flex flex-col justify-center">
                  <div className="space-y-6">
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="secondary">Start From 8 Years Old</Badge>
                      <Badge variant="secondary">Curious Student</Badge>
                      <Badge variant="secondary">Beginner Level</Badge>
                    </div>
                    <CardHeader className="p-0">
                      <div className="flex items-center gap-3 mb-4">
                        <Code className="w-8 h-8 text-blue-600" />
                        <CardTitle className="text-3xl font-bold">
                          Discovery Program
                        </CardTitle>
                      </div>
                      <CardDescription className="text-lg text-gray-600">
                        Master programming basics while exploring various
                        fields, helping you choose the right specialization for
                        your future.
                      </CardDescription>
                    </CardHeader>
                    <Link href="/program/discovery">
                      <Button className="bg-green-600 hover:bg-green-700 w-fit">
                        Invest in Yourself Now
                      </Button>
                    </Link>
                  </div>
                </CardContent>
                <div className="bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center p-12">
                  <div className="text-white text-center">
                    <BookOpen className="w-24 h-24 mx-auto mb-4" />
                    <h3 className="text-2xl font-bold">Explore & Discover</h3>
                  </div>
                </div>
              </div>
            </Card>

            {/* Specialization Program */}
            <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <div className="grid md:grid-cols-2 gap-0">
                <div className="bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center p-12 md:order-1">
                  <div className="text-white text-center">
                    <Lightbulb className="w-24 h-24 mx-auto mb-4" />
                    <h3 className="text-2xl font-bold">
                      Innovate & Specialize
                    </h3>
                  </div>
                </div>
                <CardContent className="p-12 flex flex-col justify-center md:order-2">
                  <div className="space-y-6">
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="secondary">Start From 13 Years Old</Badge>
                      <Badge variant="secondary">Innovator Student</Badge>
                      <Badge variant="secondary">Intermediate Level</Badge>
                    </div>
                    <CardHeader className="p-0">
                      <div className="flex items-center gap-3 mb-4">
                        <TrendingUp className="w-8 h-8 text-orange-600" />
                        <CardTitle className="text-3xl font-bold">
                          Specialization Program
                        </CardTitle>
                      </div>
                      <CardDescription className="text-lg text-gray-600">
                        Specialize in a tech field, explore its real-world
                        impact across industries, and build your personal brand
                        and fanbase along the way.
                      </CardDescription>
                    </CardHeader>
                    <Link href="/program/specialization">
                      <Button className="bg-orange-600 hover:bg-orange-700 w-fit">
                        Admission Test Info
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </div>
            </Card>

            {/* IBS Program */}
            <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <div className="grid md:grid-cols-2 gap-0">
                <CardContent className="p-12 flex flex-col justify-center">
                  <div className="space-y-6">
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="secondary">Start From 15 Years Old</Badge>
                      <Badge variant="secondary">Tenacious Student</Badge>
                      <Badge variant="secondary">Beginner Level</Badge>
                    </div>
                    <CardHeader className="p-0">
                      <div className="flex items-center gap-3 mb-4">
                        <Briefcase className="w-8 h-8 text-blue-600" />
                        <CardTitle className="text-3xl font-bold">
                          IBS – Ibsra Business School
                        </CardTitle>
                      </div>
                      <CardDescription className="text-lg text-gray-600">
                        Master business foundations and turn your skills into a
                        real income source.
                      </CardDescription>
                    </CardHeader>
                    <Link href="/program/ibs">
                      <Button className="bg-blue-600 hover:bg-blue-700 w-fit">
                        Know More
                      </Button>
                    </Link>
                  </div>
                </CardContent>
                <div className="bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center p-12">
                  <div className="text-white text-center">
                    <Briefcase className="w-24 h-24 mx-auto mb-4" />
                    <h3 className="text-2xl font-bold">Build & Earn</h3>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Why IBSRA Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Why IBSRA?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              What Makes IBSRA Different?
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="text-center p-8 shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="space-y-4">
                <Users className="w-16 h-16 text-blue-600 mx-auto" />
                <h3 className="text-3xl font-bold text-blue-600">10,000+</h3>
                <p className="text-lg font-semibold">Students Trained</p>
                <p className="text-gray-600">Across Egypt</p>
              </CardContent>
            </Card>

            <Card className="text-center p-8 shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="space-y-4">
                <School className="w-16 h-16 text-green-600 mx-auto" />
                <h3 className="text-3xl font-bold text-green-600">40+</h3>
                <p className="text-lg font-semibold">Partner Schools</p>
                <p className="text-gray-600">Trust IBSRA</p>
              </CardContent>
            </Card>

            <Card className="text-center p-8 shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="space-y-4">
                <TrendingUp className="w-16 h-16 text-orange-600 mx-auto" />
                <h3 className="text-3xl font-bold text-orange-600">Real</h3>
                <p className="text-lg font-semibold">Income Outcomes</p>
                <p className="text-gray-600">for Teenagers</p>
              </CardContent>
            </Card>

            <Card className="text-center p-8 shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="space-y-4">
                <Award className="w-16 h-16 text-purple-600 mx-auto" />
                <h3 className="text-3xl font-bold text-purple-600">
                  Certified
                </h3>
                <p className="text-lg font-semibold">Google & Microsoft</p>
                <p className="text-gray-600">Official Partners</p>
              </CardContent>
            </Card>

            <Card className="text-center p-8 shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="space-y-4">
                <Star className="w-16 h-16 text-yellow-600 mx-auto" />
                <h3 className="text-3xl font-bold text-yellow-600">Expert</h3>
                <p className="text-lg font-semibold">Mentors</p>
                <p className="text-gray-600">From Leading Companies</p>
              </CardContent>
            </Card>

            <Card className="text-center p-8 shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="space-y-4">
                <CheckCircle className="w-16 h-16 text-indigo-600 mx-auto" />
                <h3 className="text-3xl font-bold text-indigo-600">Career</h3>
                <p className="text-lg font-semibold">Focused Programs</p>
                <p className="text-gray-600">Not Just Skills</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Clients Section */}
      <section className="py-16 px-4 bg-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Trusted Clients
            </h2>
            <p className="text-lg text-gray-600">
              Partnering with leading organizations across Egypt
            </p>
          </div>

          {/* Scrollable Logos Container */}
          <div className="scrollable-container">
            <div className="flex animate-scroll">
              {/* First set of logos */}
              <div className="flex items-center justify-center min-w-0 shrink-0">
                <div className="flex items-center space-x-16 px-8">
                  <div className="w-32 h-16 bg-white rounded-lg shadow-sm flex items-center justify-center">
                    <span className="text-blue-600 font-bold text-lg">
                      Microsoft
                    </span>
                  </div>
                  <div className="w-32 h-16 bg-white rounded-lg shadow-sm flex items-center justify-center">
                    <span className="text-red-600 font-bold text-lg">
                      Google
                    </span>
                  </div>
                  <div className="w-32 h-16 bg-white rounded-lg shadow-sm flex items-center justify-center">
                    <span className="text-blue-800 font-bold text-lg">IBM</span>
                  </div>
                  <div className="w-32 h-16 bg-white rounded-lg shadow-sm flex items-center justify-center">
                    <span className="text-orange-600 font-bold text-lg">
                      Amazon
                    </span>
                  </div>
                  <div className="w-32 h-16 bg-white rounded-lg shadow-sm flex items-center justify-center">
                    <span className="text-blue-600 font-bold text-lg">
                      Meta
                    </span>
                  </div>
                  <div className="w-32 h-16 bg-white rounded-lg shadow-sm flex items-center justify-center">
                    <span className="text-green-600 font-bold text-lg">
                      Spotify
                    </span>
                  </div>
                  <div className="w-32 h-16 bg-white rounded-lg shadow-sm flex items-center justify-center">
                    <span className="text-purple-600 font-bold text-lg">
                      Adobe
                    </span>
                  </div>
                  <div className="w-32 h-16 bg-white rounded-lg shadow-sm flex items-center justify-center">
                    <span className="text-blue-500 font-bold text-lg">
                      Intel
                    </span>
                  </div>
                  <div className="w-32 h-16 bg-white rounded-lg shadow-sm flex items-center justify-center">
                    <span className="text-red-500 font-bold text-lg">
                      Oracle
                    </span>
                  </div>
                  <div className="w-32 h-16 bg-white rounded-lg shadow-sm flex items-center justify-center">
                    <span className="text-green-700 font-bold text-lg">
                      NVIDIA
                    </span>
                  </div>
                </div>
              </div>

              {/* Duplicate set for seamless loop */}
              <div className="flex items-center justify-center min-w-0 shrink-0">
                <div className="flex items-center space-x-16 px-8">
                  <div className="w-32 h-16 bg-white rounded-lg shadow-sm flex items-center justify-center">
                    <span className="text-blue-600 font-bold text-lg">
                      Microsoft
                    </span>
                  </div>
                  <div className="w-32 h-16 bg-white rounded-lg shadow-sm flex items-center justify-center">
                    <span className="text-red-600 font-bold text-lg">
                      Google
                    </span>
                  </div>
                  <div className="w-32 h-16 bg-white rounded-lg shadow-sm flex items-center justify-center">
                    <span className="text-blue-800 font-bold text-lg">IBM</span>
                  </div>
                  <div className="w-32 h-16 bg-white rounded-lg shadow-sm flex items-center justify-center">
                    <span className="text-orange-600 font-bold text-lg">
                      Amazon
                    </span>
                  </div>
                  <div className="w-32 h-16 bg-white rounded-lg shadow-sm flex items-center justify-center">
                    <span className="text-blue-600 font-bold text-lg">
                      Meta
                    </span>
                  </div>
                  <div className="w-32 h-16 bg-white rounded-lg shadow-sm flex items-center justify-center">
                    <span className="text-green-600 font-bold text-lg">
                      Spotify
                    </span>
                  </div>
                  <div className="w-32 h-16 bg-white rounded-lg shadow-sm flex items-center justify-center">
                    <span className="text-purple-600 font-bold text-lg">
                      Adobe
                    </span>
                  </div>
                  <div className="w-32 h-16 bg-white rounded-lg shadow-sm flex items-center justify-center">
                    <span className="text-blue-500 font-bold text-lg">
                      Intel
                    </span>
                  </div>
                  <div className="w-32 h-16 bg-white rounded-lg shadow-sm flex items-center justify-center">
                    <span className="text-red-500 font-bold text-lg">
                      Oracle
                    </span>
                  </div>
                  <div className="w-32 h-16 bg-white rounded-lg shadow-sm flex items-center justify-center">
                    <span className="text-green-700 font-bold text-lg">
                      NVIDIA
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Success Stories
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real students, real results, real income
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">
                    A
                  </div>
                  <div>
                    <h3 className="font-bold">Ahmed, 16</h3>
                    <p className="text-gray-600">Mobile App Developer</p>
                  </div>
                </div>
                <p className="text-gray-700 mb-4">
                  "Started earning $500/month from freelance app development
                  after completing the Specialization Program."
                </p>
                <div className="flex text-yellow-500">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center text-white font-bold">
                    S
                  </div>
                  <div>
                    <h3 className="font-bold">Sara, 17</h3>
                    <p className="text-gray-600">Digital Marketing Expert</p>
                  </div>
                </div>
                <p className="text-gray-700 mb-4">
                  "Built my personal brand and now manage social media for 3
                  local businesses, earning $800/month."
                </p>
                <div className="flex text-yellow-500">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold">
                    M
                  </div>
                  <div>
                    <h3 className="font-bold">Mohamed, 18</h3>
                    <p className="text-gray-600">Tech Entrepreneur</p>
                  </div>
                </div>
                <p className="text-gray-700 mb-4">
                  "Launched my own tech startup after IBS program. Currently
                  generating $2000/month in revenue."
                </p>
                <div className="flex text-yellow-500">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-600 to-purple-700 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Start Your Journey?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Join thousands of students who are already building their future
            with IBSRA
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 text-lg"
            >
              Apply for Admission Test
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-gray-200 hover:bg-white hover:text-blue-600 px-8 py-4 text-lg bg-white/10 backdrop-blur-sm"
            >
              Schedule a Consultation
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">IBSRA</h3>
              <p className="text-gray-400">
                The first EdTech company helping students build their first
                income source.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Programs</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="/program/discovery" className="hover:text-white">
                    Discovery Program
                  </Link>
                </li>
                <li>
                  <Link
                    href="/program/specialization"
                    className="hover:text-white"
                  >
                    Specialization Program
                  </Link>
                </li>
                <li>
                  <Link href="/program/ibs" className="hover:text-white">
                    IBS Business School
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="#" className="hover:text-white">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Success Stories
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Partners
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Email: info@ibsra.com</li>
                <li>Phone: +20 123 456 789</li>
                <li>Address: Cairo, Egypt</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} IBSRA. All rights reserved</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

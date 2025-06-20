"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Users,
  Clock,
  Award,
  CheckCircle,
  Star,
  BookOpen,
  Target,
  Lightbulb,
  ArrowLeft,
  Calendar,
  FileText,
} from "lucide-react"
import Link from "next/link"
import { useParams } from "next/navigation"

const programData = {
  discovery: {
    title: "Discovery Program",
    subtitle: "Explore & Discover",
    description:
      "Master programming basics while exploring various fields, helping you choose the right specialization for your future.",
    tags: ["Start From 8 Years Old", "Curious Student", "Beginner Level"],
    color: "from-blue-500 to-purple-600",
    icon: BookOpen,
    designedFor: [
      "Children aged 8-12 years old",
      "Students with no prior programming experience",
      "Curious minds who love to explore and learn",
      "Kids who enjoy problem-solving and creativity",
      "Parents looking to introduce their children to technology",
    ],
    whatYouLearn: [
      "Basic programming concepts and logic",
      "Introduction to Scratch visual programming",
      "Simple game development",
      "Basic web development (HTML/CSS)",
      "Problem-solving and computational thinking",
      "Digital literacy and online safety",
      "Creative project development",
    ],
    programInfo: {
      duration: "6 months",
      sessions: "2 sessions per week",
      sessionLength: "1.5 hours per session",
      classSize: "Maximum 12 students",
      format: "Online & In-person options",
      certificate: "IBSRA Discovery Certificate",
    },
    projects: [
      "Interactive storytelling game",
      "Simple animation projects",
      "Basic website creation",
      "Educational quiz application",
      "Creative art projects with code",
    ],
    outcomes: [
      "Solid foundation in programming concepts",
      "Ability to create simple interactive projects",
      "Enhanced problem-solving skills",
      "Improved logical thinking abilities",
      "Confidence in using technology creatively",
      "Readiness for advanced programming courses",
    ],
    benefits: [
      "Small class sizes for personalized attention",
      "Expert instructors with child education experience",
      "Fun, interactive learning environment",
      "Regular progress reports for parents",
      "Access to online learning platform",
      "Certificate upon completion",
      "Pathway to Specialization Program",
    ],
    policy: {
      enrollment: "Rolling enrollment available",
      payment: "Monthly payment plans available",
      refund: "30-day money-back guarantee",
      attendance: "80% attendance required for certification",
      materials: "All learning materials included",
      support: "24/7 online support available",
    },
  },
  specialization: {
    title: "Specialization Program",
    subtitle: "Innovate & Specialize",
    description:
      "Specialize in a tech field, explore its real-world impact across industries, and build your personal brand and fanbase along the way.",
    tags: ["Start From 13 Years Old", "Innovator Student", "Intermediate Level"],
    color: "from-orange-500 to-red-600",
    icon: Lightbulb,
    designedFor: [
      "Teenagers aged 13-17 years old",
      "Students who completed Discovery Program or have basic programming knowledge",
      "Young innovators ready to specialize",
      "Students scoring 85+ on admission test",
      "Future tech leaders and entrepreneurs",
    ],
    whatYouLearn: [
      "Advanced programming in chosen specialization",
      "Industry-specific tools and frameworks",
      "Real-world project development",
      "Personal branding and portfolio building",
      "Professional networking skills",
      "Industry trends and emerging technologies",
      "Leadership and teamwork skills",
    ],
    programInfo: {
      duration: "12 months",
      sessions: "3 sessions per week",
      sessionLength: "2 hours per session",
      classSize: "Maximum 15 students",
      format: "Hybrid learning model",
      certificate: "IBSRA Specialization Certificate",
    },
    projects: [
      "Industry-specific capstone project",
      "Personal portfolio website",
      "Mobile application development",
      "AI/ML implementation project",
      "Startup pitch presentation",
    ],
    outcomes: [
      "Expertise in chosen tech specialization",
      "Professional portfolio of projects",
      "Strong personal brand presence",
      "Industry connections and network",
      "Freelancing opportunities",
      "Preparation for tech internships",
    ],
    benefits: [
      "Industry expert mentors",
      "Real-world project experience",
      "Personal branding guidance",
      "Networking opportunities",
      "Internship placement assistance",
      "Freelancing support",
      "Advanced certification",
    ],
    policy: {
      enrollment: "Admission test required",
      payment: "Flexible payment options",
      refund: "14-day money-back guarantee",
      attendance: "85% attendance required",
      materials: "Professional tools and software included",
      support: "Dedicated mentor support",
    },
  },
  ibs: {
    title: "IBS – Ibsra Business School",
    subtitle: "Build & Earn",
    description: "Master business foundations and turn your skills into a real income source.",
    tags: ["Start From 15 Years Old", "Tenacious Student", "Beginner Level"],
    color: "from-blue-500 to-indigo-600",
    icon: Target,
    designedFor: [
      "Students aged 15+ years old",
      "Tenacious and persistent individuals",
      "Future entrepreneurs and business leaders",
      "Students ready to monetize their skills",
      "Those seeking real income opportunities",
    ],
    whatYouLearn: [
      "Business fundamentals and strategy",
      "Entrepreneurship and startup development",
      "Financial literacy and management",
      "Marketing and sales techniques",
      "Digital business models",
      "Investment and wealth building",
      "Leadership and management skills",
    ],
    programInfo: {
      duration: "18 months",
      sessions: "2 sessions per week",
      sessionLength: "2.5 hours per session",
      classSize: "Maximum 20 students",
      format: "Executive-style learning",
      certificate: "IBSRA Business Certificate",
    },
    projects: [
      "Business plan development",
      "Market research project",
      "Digital marketing campaign",
      "Financial modeling exercise",
      "Startup pitch competition",
    ],
    outcomes: [
      "Comprehensive business knowledge",
      "Ability to start and run a business",
      "Real income generation skills",
      "Professional network of entrepreneurs",
      "Investment and financial planning skills",
      "Leadership and management capabilities",
    ],
    benefits: [
      "Real business mentorship",
      "Income generation opportunities",
      "Entrepreneur network access",
      "Business plan development support",
      "Funding and investment guidance",
      "Professional certification",
      "Lifetime alumni network",
    ],
    policy: {
      enrollment: "Application and interview process",
      payment: "Income-share agreement available",
      refund: "Risk-free trial period",
      attendance: "90% attendance required",
      materials: "Business tools and resources included",
      support: "Executive coaching included",
    },
  },
}

export default function ProgramDetails() {
  const params = useParams()
  const slug = params.slug as string
  const program = programData[slug as keyof typeof programData]

  if (!program) {
    return <div>Program not found</div>
  }

  const IconComponent = program.icon

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className={`py-20 px-4 bg-gradient-to-r ${program.color} text-white`}>
        <div className="max-w-7xl mx-auto">
          <Link href="/" className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-8">
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex flex-wrap gap-2 mb-6">
                {program.tags.map((tag, index) => (
                  <Badge key={index} variant="secondary" className="bg-white/20 text-white border-white/30">
                    {tag}
                  </Badge>
                ))}
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">{program.title}</h1>
              <p className="text-xl text-white/90 mb-8">{program.description}</p>
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                Enroll Now
              </Button>
            </div>
            <div className="text-center">
              <IconComponent className="w-32 h-32 mx-auto mb-4" />
              <h2 className="text-3xl font-bold">{program.subtitle}</h2>
            </div>
          </div>
        </div>
      </section>

      {/* Program Details */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto space-y-16">
          {/* This Program Designed For */}
          <Card className="shadow-md">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-2xl">
                <Users className="w-6 h-6 text-blue-600" />
                This Program Designed For
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="grid md:grid-cols-2 gap-4">
                {program.designedFor.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* What You'll Learn */}
          <Card className="shadow-md">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-2xl">
                <BookOpen className="w-6 h-6 text-blue-600" />
                What You'll Learn
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="grid md:grid-cols-2 gap-4">
                {program.whatYouLearn.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Star className="w-5 h-5 text-yellow-500 mt-0.5 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* Program Information */}
          <Card className="shadow-md">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-2xl">
                <Clock className="w-6 h-6 text-blue-600" />
                Program Information
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="flex items-center gap-3">
                  <Calendar className="w-5 h-5 text-blue-600" />
                  <div>
                    <p className="font-semibold">Duration</p>
                    <p className="text-gray-600">{program.programInfo.duration}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-blue-600" />
                  <div>
                    <p className="font-semibold">Sessions</p>
                    <p className="text-gray-600">{program.programInfo.sessions}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Users className="w-5 h-5 text-blue-600" />
                  <div>
                    <p className="font-semibold">Class Size</p>
                    <p className="text-gray-600">{program.programInfo.classSize}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Award className="w-5 h-5 text-blue-600" />
                  <div>
                    <p className="font-semibold">Certificate</p>
                    <p className="text-gray-600">{program.programInfo.certificate}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Target className="w-5 h-5 text-blue-600" />
                  <div>
                    <p className="font-semibold">Format</p>
                    <p className="text-gray-600">{program.programInfo.format}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-blue-600" />
                  <div>
                    <p className="font-semibold">Session Length</p>
                    <p className="text-gray-600">{program.programInfo.sessionLength}</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Projects */}
          <Card className="shadow-md">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-2xl">
                <Lightbulb className="w-6 h-6 text-blue-600" />
                Projects
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-4">
                {program.projects.map((project, index) => (
                  <div key={index} className="p-4 bg-gray-50 rounded-lg">
                    <h4 className="font-semibold mb-2">Project {index + 1}</h4>
                    <p className="text-gray-600">{project}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Program Outcomes */}
          <Card className="shadow-md">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-2xl">
                <Target className="w-6 h-6 text-blue-600" />
                Program Outcomes
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="grid md:grid-cols-2 gap-4">
                {program.outcomes.map((outcome, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Award className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" />
                    <span>{outcome}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* Program Benefits */}
          <Card className="shadow-md">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-2xl">
                <Star className="w-6 h-6 text-blue-600" />
                Program Benefits
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="grid md:grid-cols-2 gap-4">
                {program.benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* Program Policy */}
          <Card className="shadow-md">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-2xl">
                <FileText className="w-6 h-6 text-blue-600" />
                Program Policy
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                {Object.entries(program.policy).map(([key, value], index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <p className="font-semibold capitalize">{key.replace(/([A-Z])/g, " $1")}</p>
                      <p className="text-gray-600">{value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* CTA Section */}
          <Card className={`shadow-md bg-gradient-to-r ${program.color} text-white`}>
            <CardContent className="p-12 text-center">
              <h3 className="text-3xl font-bold mb-4">Ready to Start Your Journey?</h3>
              <p className="text-xl mb-8 opacity-90">Join {program.title} and transform your future today!</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                  Enroll Now
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-blue-600"
                >
                  Download Brochure
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}

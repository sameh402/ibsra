"use client";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { X } from "lucide-react";

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function VideoModal({ isOpen, onClose }: VideoModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl w-full p-0 bg-black">
        <DialogHeader className="sr-only">
          <DialogTitle>IBSRA Demo Video</DialogTitle>
          <DialogDescription>
            Watch our demo video to learn more about IBSRA's educational
            programs and services.
          </DialogDescription>
        </DialogHeader>

        <div className="relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="aspect-video">
            <iframe
              src="https://www.youtube.com/embed/1_2yEb1F9G8?autoplay=0&controls=1&rel=0&modestbranding=1"
              className="w-full h-full"
              allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title="IBSRA Demo Video"
            />
          </div>

          <div className="bg-gradient-to-r from-blue-600 to-purple-700 text-white p-6">
            <div className="text-center space-y-4">
              <h3 className="text-2xl font-bold">
                Ready to Transform Your Future?
              </h3>
              <p className="text-lg opacity-90">
                This demo shows how IBSRA helps students build real income
                sources through our comprehensive programs.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Button
                  size="lg"
                  className="bg-white text-blue-600 hover:bg-gray-100"
                  onClick={onClose}
                >
                  Apply for Admission Test
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-blue-600"
                  onClick={onClose}
                >
                  Book Free Consultation
                </Button>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

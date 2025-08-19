"use client";
import React from "react";
import Image from "../ui/Image";
import Button from "../ui/button";
import { MailIcon, WhatsAppIcon } from "../ui/icons/icons";
import { joinWhatsApp } from "../actions/join-whatsapp";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

export default function TopBar() {
  const router = useRouter();

  return (
    <div className="sticky top-0 z-50 bg-main-color-20 shadow-sm w-full">
      <div className="w-full max-w-7xl mx-auto flex justify-between items-center px-2">
        {/* Logo */}
        <div
          className="w-fit h-fit cursor-pointer"
          onClick={() => {
            router.push("/");
          }}
        >
          <Image
            src="/images/badmintoons-logo.PNG"
            className="w-15 h-15 object-cover"
            alt="Logo"
          />
        </div>

        {/* Buttons */}
        <motion.div
          className="flex gap-2 items-center pr-1"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, staggerChildren: 0.2 }}
        >
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Button onClick={() => {}} size="small" typeStyle="secondary">
              <div className="flex gap-1 items-center">
                <MailIcon className="w-4 h-4" />
                <p>Add Feedback</p>
              </div>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <Button
              onClick={() => {
                joinWhatsApp();
              }}
              size="small"
            >
              <div className="flex items-center gap-1">
                <WhatsAppIcon className="w-4 h-4" />
                <p>Join Group</p>
              </div>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

"use client";
import React from "react";
import Image from "../ui/Image";
import Button from "../ui/button";
import { MailIcon, WhatsAppIcon } from "../ui/icons/icons";
import { joinWhatsApp } from "../actions/join-whatsapp";

export default function TopBar() {
  return (
    <div className="sticky top-0 z-50 bg-main-color-20 shadow-sm w-full">
      <div className="w-full max-w-7xl mx-auto flex justify-between items-center px-2">
        <Image
          src="/images/badmintoons-logo.PNG"
          className="w-15 h-15"
          alt="Logo"
        />
        <div className="flex gap-2 items-center pr-1">
          <Button onClick={() => {}} size="small" typeStyle="secondary">
            <div className="flex gap-1 items-center">
              <MailIcon className="w-4 h-4" />
              <p>Add Feedback</p>
            </div>
          </Button>
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
        </div>
      </div>
    </div>
  );
}

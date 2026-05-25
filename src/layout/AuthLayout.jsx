import React, { useState } from "react"
import { Outlet } from "react-router-dom"
import {
  Bot,
  BatteryCharging,
  Wifi,
  ChevronLeft,
  ChevronRight,
} from "lucide-react"

const AuthLayout = () => {
  const [open, setOpen] = useState(true)

  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-orange-50 via-white to-sky-100 flex items-center justify-center p-3 md:p-8">

      {/* Background Glow Effects */}
      <div className="absolute top-[-120px] left-[-100px] w-[350px] h-[350px] bg-orange-300/30 rounded-full blur-3xl"></div>

      <div className="absolute bottom-[-150px] right-[-100px] w-[400px] h-[400px] bg-sky-300/30 rounded-full blur-3xl"></div>

      <div className="absolute top-[20%] right-[15%] w-[120px] h-[120px] bg-primary/10 rounded-full blur-2xl"></div>

      {/* Main Container */}
      <div className="relative z-10 w-full max-w-7xl bg-white/70 backdrop-blur-xl border border-white/40 rounded-[32px] md:rounded-[40px] overflow-hidden shadow-[0_20px_80px_rgba(15,23,42,0.12)] flex transition-all duration-500">

        {/* ================= LEFT SIDE ================= */}
        <div
          className={`
            relative overflow-hidden bg-gradient-to-br from-primary via-orange-400 to-orange-500
            transition-all duration-500 ease-in-out
            hidden lg:flex flex-col justify-between

            ${
              open
                ? "w-1/2 p-14 opacity-100"
                : "w-0 p-0 opacity-0"
            }
          `}
        >

          {/* Decorative Shapes */}
          <div className="absolute top-[-50px] left-[-50px] w-72 h-72 rounded-full bg-white/10"></div>

          <div className="absolute bottom-[-80px] right-[-50px] w-80 h-80 rounded-full bg-white/10"></div>

          <div className="absolute top-[40%] right-10 w-20 h-20 rounded-full bg-white/10 blur-xl"></div>

          {/* Content */}
          <div
            className={`
              transition-all duration-500
              ${
                open
                  ? "translate-x-0 opacity-100"
                  : "-translate-x-10 opacity-0"
              }
            `}
          >

            {/* Logo */}
            <div className="flex items-center gap-3">
              <div className="w-14 h-14 rounded-2xl bg-white/20 backdrop-blur-lg flex items-center justify-center">
                <Bot className="text-white" size={30} />
              </div>

              <div>
                <h2 className="text-3xl font-black text-white tracking-tight">
                  KeedoBot
                </h2>

                <p className="text-orange-100 text-sm">
                  Smart Robotics Platform
                </p>
              </div>
            </div>

            {/* Robot Image */}
            <div className="flex justify-center py-8">
              <img
                src="/keedo.jpeg"
                alt="KeedoBot"
                className="w-[260px] xl:w-[340px] object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.25)] hover:scale-105 transition-all duration-500"
              />
            </div>

            {/* Main Text */}
            <div>
              <h1 className="text-4xl xl:text-5xl font-black text-white leading-tight">
                Control Your
                <br />
                Smart Robot 🤖
              </h1>

              <p className="text-orange-100 mt-5 text-base xl:text-lg leading-relaxed max-w-md">
                Learn, explore, and manage your robots with a modern and interactive platform built for kids.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 mt-10">

                <div className="bg-white/15 backdrop-blur-lg rounded-2xl p-4 border border-white/10">
                  <Wifi className="text-white mb-2" size={24} />

                  <h3 className="text-white text-2xl font-bold">
                    24+
                  </h3>

                  <p className="text-orange-100 text-sm">
                    Online
                  </p>
                </div>

                <div className="bg-white/15 backdrop-blur-lg rounded-2xl p-4 border border-white/10">
                  <BatteryCharging className="text-white mb-2" size={24} />

                  <h3 className="text-white text-2xl font-bold">
                    82%
                  </h3>

                  <p className="text-orange-100 text-sm">
                    Battery
                  </p>
                </div>

                <div className="bg-white/15 backdrop-blur-lg rounded-2xl p-4 border border-white/10">
                  <Bot className="text-white mb-2" size={24} />

                  <h3 className="text-white text-2xl font-bold">
                    T2
                  </h3>

                  <p className="text-orange-100 text-sm">
                    Active
                  </p>
                </div>

              </div>
            </div>
          </div>
        </div>

        {/* ================= RIGHT SIDE ================= */}
        <div
          className={`
            relative flex items-center justify-center transition-all duration-500
            ${open ? "lg:w-1/2" : "lg:w-full"}
            w-full
            p-4 sm:p-6 md:p-10 xl:p-16
          `}
        >

          {/* Desktop Toggle */}
          <button
            onClick={() => setOpen(!open)}
            className="hidden lg:flex absolute top-6 left-6 z-20 w-12 h-12 rounded-2xl bg-white shadow-lg border border-orange-100 items-center justify-center hover:scale-105 transition-all"
          >
            {open ? (
              <ChevronLeft className="text-primary" />
            ) : (
              <ChevronRight className="text-primary" />
            )}
          </button>

          {/* Form Area */}
          <div className="w-full max-w-lg">

            {/* Mobile Logo */}
            <div className="lg:hidden flex flex-col items-center mb-8">

              <div className="w-20 h-20 rounded-3xl bg-gradient-to-br from-primary to-orange-400 flex items-center justify-center shadow-xl">
                <Bot className="text-white" size={40} />
              </div>

              <h2 className="text-4xl font-black text-textPrimary mt-5">
                KeedoBot
              </h2>

              <p className="text-textSecondary mt-2 text-center">
                Smart Robotics Platform For Kids
              </p>
            </div>

            {/* Form Card */}
            <div className="bg-white/70 backdrop-blur-xl border border-orange-100 rounded-[28px] md:rounded-[32px] p-5 sm:p-6 md:p-10 shadow-[0_10px_50px_rgba(15,23,42,0.08)]">

              <Outlet />

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AuthLayout
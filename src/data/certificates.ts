import { BrainCircuit, CircuitBoard, Server, Terminal, Wrench } from 'lucide-react';
import type { AccentKey, Icon } from '@/lib/accents';

/* ------------------------------------------------------------------ *
 *  CERTIFICATIONS
 *  Flat list + group metadata. Counts, totals and the filter chips are
 *  all derived, so adding a row here is the only edit needed.
 *  Each id resolves at https://ude.my/<id>.
 * ------------------------------------------------------------------ */

export type CertIssuer = 'Udemy' | 'Coursera';

export type CertGroup =
  | 'Embedded & Hardware'
  | 'Backend & Cloud'
  | 'Languages'
  | 'AI & Data'
  | 'Web & Tooling';

export const certGroups: { key: CertGroup; icon: Icon; accent: AccentKey }[] = [
  { key: 'Embedded & Hardware', icon: CircuitBoard, accent: 'emerald' },
  { key: 'Backend & Cloud', icon: Server, accent: 'violet' },
  { key: 'Languages', icon: Terminal, accent: 'blue' },
  { key: 'AI & Data', icon: BrainCircuit, accent: 'sky' },
  { key: 'Web & Tooling', icon: Wrench, accent: 'amber' },
];

export const certificates: {
  title: string;
  instructor: string;
  date: string;
  /** Udemy prints total hours; Coursera certificates do not. */
  hours?: number;
  /** Udemy: the UC-… certificate number. Coursera: the verify code. */
  id: string;
  issuer: CertIssuer;
  group: CertGroup;
}[] = [
  // Embedded & Hardware
  { title: 'PCB Design with KiCad 9', instructor: 'Dr. Peter Dalmaris', date: 'Dec 2025', hours: 32, id: 'UC-44f5593c-d7d1-4dd6-8cef-8b2a901adeb0', issuer: 'Udemy', group: 'Embedded & Hardware' },
  { title: 'DSP From Ground Up on ARM Processors', instructor: 'Israel Gbati · BHM Engineering Academy', date: 'Apr 2026', hours: 25.5, id: 'UC-dc8125b6-5424-4334-9b70-873bfe917724', issuer: 'Udemy', group: 'Embedded & Hardware' },
  { title: 'The Complete Electronics Course: Analog Hardware Design', instructor: 'Hardware Academy', date: 'Apr 2026', hours: 24.5, id: 'UC-09493a39-8ce9-41bd-b3ea-ee936eb8bb1d', issuer: 'Udemy', group: 'Embedded & Hardware' },
  { title: 'FreeRTOS From Ground Up on ARM Processors', instructor: 'Israel Gbati · BHM Engineering Academy', date: 'Aug 2026', hours: 23.5, id: 'UC-5a3d8f79-db59-4d47-81b9-6200be6dc8ab', issuer: 'Udemy', group: 'Embedded & Hardware' },
  { title: 'Microcontroller Embedded C Programming', instructor: 'Kiran Nayak · FastBit Embedded Brain Academy', date: 'Sep 2025', hours: 16.5, id: 'UC-b4c94226-3a7d-4f1e-bd90-50e297ef7fbc', issuer: 'Udemy', group: 'Embedded & Hardware' },
  { title: 'Mastering Advanced Battery Management for Electric Vehicles', instructor: 'Ritul Shah', date: 'Sep 2026', hours: 9, id: 'UC-7a7586a0-b46b-4566-8f8e-53b9572766e4', issuer: 'Udemy', group: 'Embedded & Hardware' },
  { title: 'Advanced PCB Design with KiCad 9', instructor: 'Dr. Peter Dalmaris', date: 'Dec 2025', hours: 8, id: 'UC-871dc16d-4ce4-4172-9b8a-60e799bf491e', issuer: 'Udemy', group: 'Embedded & Hardware' },
  { title: 'Foundations of Li-ion Batteries & Battery Management Systems', instructor: 'Akshay Gill', date: 'Sep 2026', hours: 5, id: 'UC-7498bc3f-aa46-4d4a-982f-811d1cc874a8', issuer: 'Udemy', group: 'Embedded & Hardware' },
  { title: 'AI-Assisted Embedded Firmware Development', instructor: 'Israel Gbati · BHM Engineering Academy', date: 'Sep 2026', hours: 4, id: 'UC-43eeb541-41a4-4e9d-ad20-fbdc01a6b228', issuer: 'Udemy', group: 'Embedded & Hardware' },

  // Backend & Cloud
  { title: 'Spring Boot Microservices with Spring Cloud, k8s & Docker', instructor: 'Faisal Memon · EmbarkX Official', date: 'Sep 2024', hours: 22, id: 'UC-46c23f8d-f735-4930-a35c-b6bee632f22a', issuer: 'Udemy', group: 'Backend & Cloud' },
  { title: 'Entity Framework Core — The Complete Guide (.NET 7)', instructor: 'Bhrugen Patel', date: 'Sep 2023', hours: 11.5, id: 'UC-ee6934fa-a68c-4760-870f-7bcbcb04bebe', issuer: 'Udemy', group: 'Backend & Cloud' },
  { title: 'Ultimate ASP.NET Core Web API Development Guide', instructor: 'Trevoir Williams', date: 'Sep 2023', hours: 10.5, id: 'UC-352d89f0-edf2-4dad-9e16-e532d5de11f5', issuer: 'Udemy', group: 'Backend & Cloud' },
  { title: 'ASP.NET Core — SOLID and Clean Architecture', instructor: 'Trevoir Williams', date: 'Sep 2023', hours: 10, id: 'UC-c72193a5-2fc6-4eee-b237-38227737da0c', issuer: 'Udemy', group: 'Backend & Cloud' },
  { title: 'RESTful Web API — The Complete Guide (.NET 7)', instructor: 'Bhrugen Patel', date: 'Aug 2023', hours: 9, id: 'UC-5b71efae-362e-4a49-827a-f9f55a44fe41', issuer: 'Udemy', group: 'Backend & Cloud' },
    { title: 'ASP.NET Core Minimal API Development Full Build', instructor: 'Trevoir Williams', date: 'Sep 2023', hours: 7.5, id: 'UC-e3c9733e-74f8-4930-b268-93f57b2c6f05', issuer: 'Udemy', group: 'Backend & Cloud' },
  { title: 'Minimal API with .NET Core (.NET 7)', instructor: 'Bhrugen Patel', date: 'Sep 2023', hours: 3.5, id: 'UC-16167eb6-b4fa-4d4e-a6f0-1cf9c164ad62', issuer: 'Udemy', group: 'Backend & Cloud' },
  { title: 'Dependency Injection in .NET 5', instructor: 'Bhrugen Patel', date: 'Sep 2023', hours: 3, id: 'UC-d5a64fde-4a94-4dae-85bb-eedc928f25d0', issuer: 'Udemy', group: 'Backend & Cloud' },
  { title: 'Dapper — Getting Started', instructor: 'Bhrugen Patel · DotNet Mastery', date: 'Sep 2023', hours: 3, id: 'UC-967a62a9-02bd-4aab-b79b-7c132ca1e0ca', issuer: 'Udemy', group: 'Backend & Cloud' },

  // Languages
  { title: 'Java 17 Masterclass: Start Coding in 2024', instructor: "Tim Buchalka's Learn Programming Academy", date: 'Oct 2024', hours: 135.5, id: 'UC-dd347243-41f9-4d9c-b399-9f9343b96492', issuer: 'Udemy', group: 'Languages' },
  { title: 'Complete Kotlin Development Masterclass', instructor: 'Catalin Stefan', date: 'Nov 2023', hours: 31, id: 'UC-25c0b6c3-b1a1-4075-87f6-d57608352a52', issuer: 'Udemy', group: 'Languages' },
  { title: 'Advanced C Programming Course', instructor: "Jason Fedin · Tim Buchalka's Learn Programming Academy", date: 'Sep 2025', hours: 29, id: 'UC-217a5a3e-a7ad-4973-b851-4de3a59fb63e', issuer: 'Udemy', group: 'Languages' },
  { title: 'C Programming — Master the C Language', instructor: "Jason Fedin · Tim Buchalka's Learn Programming Academy", date: 'Sep 2025', hours: 25.5, id: 'UC-74474b8a-7a6c-4f8e-b0a8-c3ab7660b375', issuer: 'Udemy', group: 'Languages' },
  { title: 'The Complete Python Bootcamp: Zero to Hero', instructor: 'Jose Portilla · Pierian Training', date: 'Jan 2026', hours: 22.5, id: 'UC-b9f0f361-a33c-418c-a107-4904685c3c6d', issuer: 'Udemy', group: 'Languages' },
  { title: 'Kotlin for Java Developers', instructor: 'Tim Buchalka · Goran Lochert', date: 'Dec 2023', hours: 17, id: 'UC-295ed338-bdc2-4c4e-846b-c068f5ed57fc', issuer: 'Udemy', group: 'Languages' },
  { title: 'Mastering Programming with MATLAB', instructor: 'Akos Ledeczi · Vanderbilt University', date: 'Nov 2021', id: '2C5FR5CGR946', issuer: 'Coursera', group: 'Languages' },
  { title: 'Introduction to Programming with MATLAB', instructor: 'Akos Ledeczi · Vanderbilt University', date: 'Aug 2021', id: 'TDEWQGACPWHQ', issuer: 'Coursera', group: 'Languages' },
  { title: 'C# Intermediate: Classes, Interfaces and OOP', instructor: 'Mosh Hamedani', date: 'Sep 2023', hours: 6, id: 'UC-42ee3d32-0532-4919-a92e-702f438f5845', issuer: 'Udemy', group: 'Languages' },
  { title: 'C# Basics for Beginners', instructor: 'Mosh Hamedani', date: 'Sep 2023', hours: 5.5, id: 'UC-75104009-fd40-48a6-b182-fb21ef26c0c7', issuer: 'Udemy', group: 'Languages' },
  { title: 'C# Advanced Topics: Prepare for Technical Interviews', instructor: 'Mosh Hamedani', date: 'Sep 2023', hours: 3, id: 'UC-aabfe22a-ce2e-433f-8aeb-806c0c50e7ce', issuer: 'Udemy', group: 'Languages' },

  // AI & Data
  { title: 'Machine Learning', instructor: 'Andrew Ng · Stanford Online', date: 'Nov 2021', id: 'VKCBHXRCVTQD', issuer: 'Coursera', group: 'AI & Data' },
  { title: 'The Complete SQL Bootcamp: Go from Zero to Hero', instructor: 'Jose Portilla · Pierian Training', date: 'Jul 2024', hours: 9, id: 'UC-ff27870a-5b6f-44bb-817d-b922a2e203e6', issuer: 'Udemy', group: 'AI & Data' },

  // Web & Tooling
  { title: 'Build Responsive Real-World Websites with HTML and CSS', instructor: 'Jonas Schmedtmann', date: 'Aug 2023', hours: 37.5, id: 'UC-0bcdb6d1-e21a-4658-b64f-555903d2ba07', issuer: 'Udemy', group: 'Web & Tooling' },
  { title: 'The Ultimate YAML Course', instructor: 'Praveenkumar Bouna', date: 'Feb 2024', hours: 2.5, id: 'UC-9d37631f-0202-40d1-87bd-38750cca74b8', issuer: 'Udemy', group: 'Web & Tooling' },
  { title: 'C# Developers: Double Your Coding Speed with Visual Studio', instructor: 'Mosh Hamedani', date: 'Sep 2023', hours: 2.5, id: 'UC-fe12ee30-a9f4-40ea-87b8-1eace1b37284', issuer: 'Udemy', group: 'Web & Tooling' },
];

export const certAccentOf = (g: CertGroup) => certGroups.find((x) => x.key === g)!.accent;

export const certIssuers = [...new Set(certificates.map((c) => c.issuer))];

export const verifyUrl = (c: { id: string; issuer: CertIssuer }) =>
  c.issuer === 'Coursera' ? `https://coursera.org/verify/${c.id}` : `https://ude.my/${c.id}`;


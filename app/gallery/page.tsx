"use client"

import { useState } from "react"
import Image from "next/image"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { X, ChevronLeft, ChevronRight, ArrowUpRight } from "lucide-react"

const categories = ["All", "Residential", "Commercial", "Hospitality", "3D", "Outdoor", "Architecture"]

const galleryData = [
  { image: "final Noble Gourmet_1 - Photo.jpg", title: "Noble UAE", category: "3D" },
  { image: "1n.jpg", title: "Noble UAE", category: "3D" },
  { image: "2n.jpg", title: "Noble UAE", category: "3D" },
  { image: "final Noble Gourmet_Photo - 2.jpg", title: "Noble UAE", category: "3D" },
  { image: "WhatsApp Image 2026-01-28 at 10.13.45 AM (3).jpeg", title: "3D Design", category: "3D" },
  { image: "WhatsApp Image 2026-01-28 at 10.15.51 AM.jpeg", title: "3D Design", category: "3D" },
  { image: "anthonydaoudphotography-10.jpg", title: "Office", category: "Commercial" },
  { image: "anthonydaoudphotography.jpg", title: "Office", category: "Commercial" },
  { image: "anthonydaoudphotography-2.jpg", title: "Office", category: "Commercial" },
  { image: "anthonydaoudphotography-3.jpg", title: "Office", category: "Commercial" },
  { image: "anthonydaoudphotography-4.jpg", title: "Office", category: "Commercial" },
  { image: "anthonydaoudphotography-5.jpg", title: "Office", category: "Commercial" },
  { image: "anthonydaoudphotography-6.jpg", title: "Office", category: "Commercial" },
  { image: "anthonydaoudphotography-7.jpg", title: "Office", category: "Commercial" },
  { image: "anthonydaoudphotography-8.jpg", title: "Office", category: "Commercial" },
  { image: "anthonydaoudphotography-9.jpg", title: "Office", category: "Commercial" },
  { image: "anthonydaoudphotography-11.jpg", title: "Office", category: "Commercial" },
  { image: "anthonydaoudphotography-12.jpg", title: "Office", category: "Commercial" },
  { image: "anthonydaoudphotography-13.jpg", title: "Office", category: "Commercial" },
  { image: "anthonydaoudphotography-14.jpg", title: "Office", category: "Commercial" },
  { image: "anthonydaoudphotography-15.jpg", title: "Office", category: "Commercial" },
  { image: "anthonydaoudphotography-16.jpg", title: "Office", category: "Commercial" },
  { image: "anthonydaoudphotography-17.jpg", title: "Office", category: "Commercial" },
  { image: "anthonydaoudphotography-18.jpg", title: "Office", category: "Commercial" },
  { image: "anthonydaoudphotography-19.jpg", title: "Office", category: "Commercial" },
  { image: "anthonydaoudphotography-20.jpg", title: "Office", category: "Commercial" },
  { image: "anthonydaoudphotography-21.jpg", title: "Office", category: "Commercial" },
  { image: "anthonydaoudphotography-22.jpg", title: "Office", category: "Commercial" },
  { image: "anthonydaoudphotography-23.jpg", title: "Office", category: "Commercial" },
  { image: "anthonydaoudphotography-24.jpg", title: "Office", category: "Commercial" },
  { image: "anthonydaoudphotography-25.jpg", title: "Office", category: "Commercial" },
  { image: "anthonydaoudphotography-26.jpg", title: "Office", category: "Commercial" },
  { image: "anthonydaoudphotography-27.jpg", title: "Office", category: "Commercial" },
  { image: "anthonydaoudphotography-28.jpg", title: "Funky Shop", category: "Commercial" },
  { image: "anthonydaoudphotography-29.jpg", title: "Funky Shop", category: "Commercial" },
  { image: "anthonydaoudphotography-30.jpg", title: "Funky Shop", category: "Commercial" },
  { image: "anthonydaoudphotography-31.jpg", title: "Funky Shop", category: "Commercial" },
  { image: "anthonydaoudphotography-32.jpg", title: "Funky Shop", category: "Commercial" },
  { image: "anthonydaoudphotography-33.jpg", title: "Funky Shop", category: "Commercial" },
  { image: "anthonydaoudphotography-34.jpg", title: "Funky Shop", category: "Commercial" },
  { image: "anthonydaoudphotography-35.jpg", title: "Funky Shop", category: "Commercial" },
  { image: "anthonydaoudphotography-36.jpg", title: "Funky Shop", category: "Commercial" },
  { image: "anthonydaoudphotography-37.jpg", title: "Funky Shop", category: "Commercial" },
  { image: "anthonydaoudphotography-38.jpg", title: "Funky Shop", category: "Commercial" },
  { image: "anthonydaoudphotography-39.jpg", title: "Funky Shop", category: "Commercial" },
  { image: "anthonydaoudphotography-40.jpg", title: "Funky Shop", category: "Commercial" },
  { image: "anthonydaoudphotography-41.jpg", title: "Funky Shop", category: "Commercial" },
  { image: "anthonydaoudphotography-42.jpg", title: "Funky Shop", category: "Commercial" },
  { image: "anthonydaoudphotography-43.jpg", title: "Funky Shop", category: "Commercial" },
  { image: "anthonydaoudphotography-44.jpg", title: "Funky Shop", category: "Commercial" },
  { image: "anthonydaoudphotography-45.jpg", title: "Funky Shop", category: "Commercial" },
  { image: "anthonydaoudphotography-46.jpg", title: "Funky Shop", category: "Commercial" },
  { image: "anthonydaoudphotography-47.jpg", title: "Funky Shop", category: "Commercial" },
  { image: "anthonydaoudphotography-48.jpg", title: "Funky Shop", category: "Commercial" },
  { image: "anthonydaoudphotography-49.jpg", title: "Funky Shop", category: "Commercial" },
  { image: "anthonydaoudphotography-50.jpg", title: "Funky Shop", category: "Commercial" },
  { image: "anthonydaoudphotography-51.jpg", title: "Funky Shop", category: "Commercial" },
  { image: "anthonydaoudphotography-52.jpg", title: "Funky Shop", category: "Commercial" },
  { image: "anthonydaoudphotography-53.jpg", title: "Funky Shop", category: "Commercial" },
  { image: "anthonydaoudphotography-54.jpg", title: "Funky Shop", category: "Commercial" },
  { image: "anthonydaoudphotography-55.jpg", title: "Funky Shop", category: "Commercial" },
  { image: "anthonydaoudphotography-56.jpg", title: "Funky Shop", category: "Commercial" },
  { image: "anthonydaoudphotography-57.jpg", title: "Funky Shop", category: "Commercial" },
  { image: "anthonydaoudphotography-58.jpg", title: "Funky Shop", category: "Commercial" },
  { image: "anthonydaoudphotography-59.jpg", title: "Funky Shop", category: "Commercial" },
  { image: "anthonydaoudphotography-60.jpg", title: "Funky Shop", category: "Commercial" },
  { image: "anthonydaoudphotography-61.jpg", title: "Funky Shop", category: "Commercial" },
  { image: "anthonydaoudphotography-62.jpg", title: "Funky Shop", category: "Commercial" },
  { image: "anthonydaoudphotography-63.jpg", title: "Funky Shop", category: "Commercial" },
  { image: "anthonydaoudphotography-64.jpg", title: "Funky Shop", category: "Commercial" },
  { image: "anthonydaoudphotography-65.jpg", title: "Funky Shop", category: "Commercial" },
  { image: "anthonydaoudphotography-66.jpg", title: "Funky Shop", category: "Commercial" },
  { image: "anthonydaoudphotography-67.jpg", title: "Funky Shop", category: "Commercial" },
  { image: "anthonydaoudphotography-68.jpg", title: "Funky Shop", category: "Commercial" },
  { image: "anthonydaoudphotography-69.jpg", title: "Funky Shop", category: "Commercial" },
  { image: "anthonydaoudphotography-70.jpg", title: "Funky Shop", category: "Commercial" },
  { image: "anthonydaoudphotography-71.jpg", title: "Funky Shop", category: "Commercial" },
  { image: "anthonydaoudphotography-72.jpg", title: "Funky Shop", category: "Commercial" },
  { image: "anthonydaoudphotography-73.jpg", title: "Funky Shop", category: "Commercial" },
  { image: "anthonydaoudphotography-74.jpg", title: "Funky Shop", category: "Commercial" },
  { image: "anthonydaoudphotography-75.jpg", title: "Funky Shop", category: "Commercial" },
  { image: "anthonydaoudphotography-76.jpg", title: "Funky Shop", category: "Commercial" },
  { image: "anthonydaoudphotography-77.jpg", title: "Funky Shop", category: "Commercial" },
  { image: "anthonydaoudphotography-78.jpg", title: "Funky Shop", category: "Commercial" },
  { image: "anthonydaoudphotography-79.jpg", title: "Funky Shop", category: "Commercial" },
  { image: "anthonydaoudphotography-80.jpg", title: "Funky Shop", category: "Commercial" },
  { image: "anthonydaoudphotography-81.jpg", title: "Funky Shop", category: "Commercial" },
  { image: "anthonydaoudphotography-82.jpg", title: "Funky Shop", category: "Commercial" },
  { image: "anthonydaoudphotography-83.jpg", title: "Funky Shop", category: "Commercial" },
  { image: "anthonydaoudphotography-84.jpg", title: "Funky Shop", category: "Commercial" },
  { image: "anthonydaoudphotography-85.jpg", title: "Funky Shop", category: "Commercial" },
  { image: "anthonydaoudphotography-119.jpg", title: "Clinic", category: "Commercial" },
  { image: "anthonydaoudphotography-86.jpg", title: "Clinic", category: "Commercial" },
  { image: "anthonydaoudphotography-87.jpg", title: "Clinic", category: "Commercial" },
  { image: "anthonydaoudphotography-88.jpg", title: "Clinic", category: "Commercial" },
  { image: "anthonydaoudphotography-89.jpg", title: "Clinic", category: "Commercial" },
  { image: "anthonydaoudphotography-90.jpg", title: "Clinic", category: "Commercial" },
  { image: "anthonydaoudphotography-91.jpg", title: "Clinic", category: "Commercial" },
  { image: "anthonydaoudphotography-92.jpg", title: "Clinic", category: "Commercial" },
  { image: "anthonydaoudphotography-93.jpg", title: "Clinic", category: "Commercial" },
  { image: "anthonydaoudphotography-94.jpg", title: "Clinic", category: "Commercial" },
  { image: "anthonydaoudphotography-95.jpg", title: "Clinic", category: "Commercial" },
  { image: "anthonydaoudphotography-96.jpg", title: "Clinic", category: "Commercial" },
  { image: "anthonydaoudphotography-97.jpg", title: "Clinic", category: "Commercial" },
  { image: "anthonydaoudphotography-98.jpg", title: "Clinic", category: "Commercial" },
  { image: "anthonydaoudphotography-99.jpg", title: "Clinic", category: "Commercial" },
  { image: "anthonydaoudphotography-100.jpg", title: "Clinic", category: "Commercial" },
  { image: "anthonydaoudphotography-101.jpg", title: "Clinic", category: "Commercial" },
  { image: "anthonydaoudphotography-102.jpg", title: "Clinic", category: "Commercial" },
  { image: "anthonydaoudphotography-103.jpg", title: "Clinic", category: "Commercial" },
  { image: "anthonydaoudphotography-104.jpg", title: "Clinic", category: "Commercial" },
  { image: "anthonydaoudphotography-105.jpg", title: "Clinic", category: "Commercial" },
  { image: "anthonydaoudphotography-106.jpg", title: "Clinic", category: "Commercial" },
  { image: "anthonydaoudphotography-107.jpg", title: "Clinic", category: "Commercial" },
  { image: "anthonydaoudphotography-108.jpg", title: "Clinic", category: "Commercial" },
  { image: "anthonydaoudphotography-109.jpg", title: "Clinic", category: "Commercial" },
  { image: "anthonydaoudphotography-110.jpg", title: "Clinic", category: "Commercial" },
  { image: "anthonydaoudphotography-111.jpg", title: "Clinic", category: "Commercial" },
  { image: "anthonydaoudphotography-112.jpg", title: "Clinic", category: "Commercial" },
  { image: "anthonydaoudphotography-113.jpg", title: "Clinic", category: "Commercial" },
  { image: "anthonydaoudphotography-114.jpg", title: "Clinic", category: "Commercial" },
  { image: "anthonydaoudphotography-115.jpg", title: "Clinic", category: "Commercial" },
  { image: "anthonydaoudphotography-116.jpg", title: "Clinic", category: "Commercial" },
  { image: "anthonydaoudphotography-117.jpg", title: "Clinic", category: "Commercial" },
  { image: "anthonydaoudphotography-118.jpg", title: "Clinic", category: "Commercial" },
  { image: "anthonydaoudphotography-120.jpg", title: "Clinic", category: "Commercial" },
  { image: "anthonydaoudphotography-121.jpg", title: "Clinic", category: "Commercial" },
  { image: "anthonydaoudphotography-122.jpg", title: "Clinic", category: "Commercial" },
  { image: "anthonydaoudphotography-123.jpg", title: "Clinic", category: "Commercial" },
  { image: "anthonydaoudphotography-124.jpg", title: "Clinic", category: "Commercial" },
  { image: "anthonydaoudphotography-125.jpg", title: "Clinic", category: "Commercial" },
  { image: "anthonydaoudphotography-126.jpg", title: "Clinic", category: "Commercial" },
  { image: "anthonydaoudphotography-143.jpg", title: "Cone-Fetti", category: "Commercial" },
  { image: "anthonydaoudphotography-144.jpg", title: "Cone-Fetti", category: "Commercial" },
  { image: "anthonydaoudphotography-145.jpg", title: "Cone-Fetti", category: "Commercial" },
  { image: "anthonydaoudphotography-146.jpg", title: "Cone-Fetti", category: "Commercial" },
  { image: "anthonydaoudphotography-147.jpg", title: "Cone-Fetti", category: "Commercial" },
  { image: "anthonydaoudphotography-148.jpg", title: "Cone-Fetti", category: "Commercial" },
  { image: "anthonydaoudphotography-149.jpg", title: "Cone-Fetti", category: "Commercial" },
  { image: "anthonydaoudphotography-150.jpg", title: "Cone-Fetti", category: "Commercial" },
  { image: "anthonydaoudphotography-151.jpg", title: "Cone-Fetti", category: "Commercial" },
  { image: "anthonydaoudphotography-152.jpg", title: "Cone-Fetti", category: "Commercial" },
  { image: "anthonydaoudphotography-153.jpg", title: "Cone-Fetti", category: "Commercial" },
  { image: "anthonydaoudphotography-154.jpg", title: "Cone-Fetti", category: "Commercial" },
  { image: "anthonydaoudphotography-155.jpg", title: "Cone-Fetti", category: "Commercial" },
  { image: "anthonydaoudphotography-156.jpg", title: "Cone-Fetti", category: "Commercial" },
  { image: "anthonydaoudphotography-157.jpg", title: "Cone-Fetti", category: "Commercial" },
  { image: "anthonydaoudphotography-158.jpg", title: "Cone-Fetti", category: "Commercial" },
  { image: "anthonydaoudphotography-159.jpg", title: "Beauty Salon", category: "Commercial" },
  { image: "anthonydaoudphotography-160.jpg", title: "Beauty Salon", category: "Commercial" },
  { image: "anthonydaoudphotography-161.jpg", title: "Beauty Salon", category: "Commercial" },
  { image: "anthonydaoudphotography-162.jpg", title: "Beauty Salon", category: "Commercial" },
  { image: "anthonydaoudphotography-163.jpg", title: "Beauty Salon", category: "Commercial" },
  { image: "anthonydaoudphotography-164.jpg", title: "Beauty Salon", category: "Commercial" },
  { image: "anthonydaoudphotography-165.jpg", title: "Beauty Salon", category: "Commercial" },
  { image: "anthonydaoudphotography-166.jpg", title: "Beauty Salon", category: "Commercial" },
  { image: "anthonydaoudphotography-167.jpg", title: "Beauty Salon", category: "Commercial" },
  { image: "anthonydaoudphotography-168.jpg", title: "Beauty Salon", category: "Commercial" },
  { image: "anthonydaoudphotography-169.jpg", title: "Beauty Salon", category: "Commercial" },
  { image: "anthonydaoudphotography-170.jpg", title: "Beauty Salon", category: "Commercial" },
  { image: "anthonydaoudphotography-171.jpg", title: "Beauty Salon", category: "Commercial" },
  { image: "anthonydaoudphotography-172.jpg", title: "Beauty Salon", category: "Commercial" },
  { image: "anthonydaoudphotography-173.jpg", title: "Beauty Salon", category: "Commercial" },
  { image: "anthonydaoudphotography-174.jpg", title: "Beauty Salon", category: "Commercial" },
  { image: "anthonydaoudphotography-175.jpg", title: "Beauty Salon", category: "Commercial" },
  { image: "anthonydaoudphotography-176.jpg", title: "Beauty Salon", category: "Commercial" },
  { image: "anthonydaoudphotography-177.jpg", title: "Beauty Salon", category: "Commercial" },
  { image: "anthonydaoudphotography-178.jpg", title: "Beauty Salon", category: "Commercial" },
  { image: "anthonydaoudphotography-179.jpg", title: "Beauty Salon", category: "Commercial" },
  { image: "anthonydaoudphotography-180.jpg", title: "Beauty Salon", category: "Commercial" },
  { image: "anthonydaoudphotography-181.jpg", title: "Beauty Salon", category: "Commercial" },
  { image: "anthonydaoudphotography-182.jpg", title: "Beauty Salon", category: "Commercial" },
  { image: "anthonydaoudphotography-185.jpg", title: "Modern House", category: "Residential" },
  { image: "anthonydaoudphotography-186.jpg", title: "Modern House", category: "Residential" },
  { image: "anthonydaoudphotography-187.jpg", title: "Modern House", category: "Residential" },
  { image: "anthonydaoudphotography-188.jpg", title: "Modern House", category: "Residential" },
  { image: "anthonydaoudphotography-189.jpg", title: "Modern House", category: "Residential" },
  { image: "anthonydaoudphotography-190.jpg", title: "Modern House", category: "Residential" },
  { image: "anthonydaoudphotography-191.jpg", title: "Modern House", category: "Residential" },
  { image: "anthonydaoudphotography-192.jpg", title: "Modern House", category: "Residential" },
  { image: "anthonydaoudphotography-193.jpg", title: "Modern House", category: "Residential" },
  { image: "anthonydaoudphotography-194.jpg", title: "Modern House", category: "Residential" },
  { image: "anthonydaoudphotography-195.jpg", title: "Modern House", category: "Residential" },
  { image: "anthonydaoudphotography-196.jpg", title: "Modern House", category: "Residential" },
  { image: "anthonydaoudphotography-197.jpg", title: "Modern House", category: "Residential" },
  { image: "anthonydaoudphotography-198.jpg", title: "Modern House", category: "Residential" },
  { image: "anthonydaoudphotography-199.jpg", title: "Modern House", category: "Residential" },
  { image: "anthonydaoudphotography-200.jpg", title: "Modern House", category: "Residential" },
  { image: "anthonydaoudphotography-201.jpg", title: "Modern House", category: "Residential" },
  { image: "anthonydaoudphotography-202.jpg", title: "Modern House", category: "Residential" },
  { image: "anthonydaoudphotography-203.jpg", title: "Modern House", category: "Residential" },
  { image: "anthonydaoudphotography-204.jpg", title: "Modern House", category: "Residential" },
  { image: "anthonydaoudphotography-205.jpg", title: "Modern House", category: "Residential" },
  { image: "anthonydaoudphotography-206.jpg", title: "Modern House", category: "Residential" },
  { image: "anthonydaoudphotography-207.jpg", title: "Modern House", category: "Residential" },
  { image: "anthonydaoudphotography-208.jpg", title: "Modern House", category: "Residential" },
  { image: "anthonydaoudphotography-209.jpg", title: "Modern House", category: "Residential" },
  { image: "anthonydaoudphotography-210.jpg", title: "Modern House", category: "Residential" },
  { image: "anthonydaoudphotography-211.jpg", title: "Modern House", category: "Residential" },
  { image: "anthonydaoudphotography-212.jpg", title: "Modern House", category: "Residential" },
  { image: "anthonydaoudphotography-213.jpg", title: "Modern House", category: "Residential" },
  { image: "anthonydaoudphotography-214.jpg", title: "Modern House", category: "Residential" },
  { image: "anthonydaoudphotography-215.jpg", title: "Walking Closet", category: "Residential" },
  { image: "anthonydaoudphotography-216.jpg", title: "Walking Closet", category: "Residential" },
  { image: "anthonydaoudphotography-217.jpg", title: "Walking Closet", category: "Residential" },
  { image: "anthonydaoudphotography-218.jpg", title: "Walking Closet", category: "Residential" },
  { image: "anthonydaoudphotography-219.jpg", title: "Walking Closet", category: "Residential" },
  { image: "anthonydaoudphotography-220.jpg", title: "Walking Closet", category: "Residential" },
  { image: "anthonydaoudphotography-221.jpg", title: "Walking Closet", category: "Residential" },
  { image: "anthonydaoudphotography-222.jpg", title: "Walking Closet", category: "Residential" },
  { image: "anthonydaoudphotography-223.jpg", title: "Walking Closet", category: "Residential" },
  { image: "anthonydaoudphotography-224.jpg", title: "Walking Closet", category: "Residential" },
  { image: "anthonydaoudphotography-225.jpg", title: "Walking Closet", category: "Residential" },
  { image: "anthonydaoudphotography-226.jpg", title: "Walking Closet", category: "Residential" },
  { image: "view 1-option 2.jpg", title: "Architecture", category: "Architecture" },
  { image: "view4-option 2.jpg", title: "Architecture", category: "Architecture" },
  { image: "WhatsApp Image 2021-01-20 at 9.00.58 AM (1).jpeg", title: "Pent House", category: "Residential" },
  { image: "WhatsApp Image 2021-01-20 at 9.00.58 AM.jpeg", title: "Pent House", category: "Residential" },
  { image: "WhatsApp Image 2026-01-28 at 10.15.51 AM (1).jpeg", title: "Modern Black Kitchen Design", category: "Residential" },
  { image: "WhatsApp Image 2026-01-28 at 10.13.46 AM (3).jpeg", title: "Lobby Design", category: "Hospitality" },
  { image: "WhatsApp Image 2026-01-28 at 10.13.46 AM (6).jpeg", title: "Lobby Design", category: "Hospitality" },
  { image: "WhatsApp Image 2026-01-28 at 10.13.46 AM.jpeg", title: "Lobby Design", category: "Hospitality" },
  { image: "project-1.jpg", title: "Modern House", category: "Residential" },
  { image: "project-2.jpg", title: "Modern House", category: "Residential" },
  { image: "project-3.jpg", title: "Modern House", category: "Residential" },
  { image: "project-4.jpg", title: "Modern House", category: "Residential" },
  { image: "IMG_5836.JPG", title: "Outdoor Landscape", category: "Outdoor" },
  { image: "IMG_5844.JPG", title: "Outdoor Landscape", category: "Outdoor" },
  { image: "JC_25436.jpg", title: "Outdoor Landscape", category: "Outdoor" },
  { image: "JC_25438.jpg", title: "Outdoor Landscape", category: "Outdoor" },
  { image: "JC_25453.jpg", title: "Outdoor Landscape", category: "Outdoor" },
  { image: "JC_25460.jpg", title: "Outdoor Landscape", category: "Outdoor" },
  { image: "view 3-high res-mod 2.jpg", title: "Pool", category: "Outdoor" },
  { image: "WhatsApp Image 2026-01-28 at 10.15.51 AM (2).jpeg", title: "Outdoor Landscape", category: "Outdoor" },
  { image: "WhatsApp Image 2026-01-28 at 10.16.40 AM (1).jpeg", title: "Outdoor Landscape", category: "Outdoor" },
  { image: "WhatsApp Image 2026-01-28 at 10.16.40 AM (2).jpeg", title: "Outdoor Landscape", category: "Outdoor" },
  { image: "Noble gourmet f_Photo - 2 (1).jpg", title: "Noble UAE", category: "Commercial" }
]

const galleryItems = galleryData.map((item, index) => {
  const year = index % 3 === 0 ? "2026" : index % 2 === 0 ? "2025" : "2024"
  return {
    id: index + 1,
    title: item.title,
    category: item.category,
    image: `/images/gallery/${item.image}`,
    year: year
  }
})

export default function GalleryPage() {
  const [viewMode, setViewMode] = useState<"projects" | "gallery">("projects")
  const [selectedProject, setSelectedProject] = useState<string | null>(null)
  const [activeCategory, setActiveCategory] = useState("All")
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null)
  const [hoveredId, setHoveredId] = useState<number | null>(null)

  // Group items by project
  const projectsMap = galleryItems.reduce((acc, item) => {
    if (!acc[item.title]) {
      acc[item.title] = {
        title: item.title,
        category: item.category,
        year: item.year,
        images: [],
        coverImage: item.image,
      }
    }
    acc[item.title].images.push(item)
    return acc
  }, {} as Record<string, { title: string; category: string; year: string; images: typeof galleryItems; coverImage: string }>)

  const projects = Object.values(projectsMap)

  const filteredProjects = activeCategory === "All"
    ? projects
    : projects.filter(p => p.category === activeCategory)

  const projectImages = selectedProject ? projectsMap[selectedProject]?.images || [] : []

  const handlePrev = () => {
    if (selectedIndex !== null) {
      setSelectedIndex(selectedIndex === 0 ? projectImages.length - 1 : selectedIndex - 1)
    }
  }

  const handleNext = () => {
    if (selectedIndex !== null) {
      setSelectedIndex(selectedIndex === projectImages.length - 1 ? 0 : selectedIndex + 1)
    }
  }

  return (
    <main className="bg-background min-h-screen">
      <Header />

      {/* Hero */}
      <section className="pt-32 pb-16 lg:pt-40 lg:pb-24 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px w-12 bg-foreground/30" />
            <span className="text-sm font-medium text-muted-foreground tracking-wide">
              {viewMode === "projects" ? "Our Portfolio" : "Project Details"}
            </span>
          </div>
          {viewMode === "gallery" && selectedProject && (
            <button 
              onClick={() => setViewMode("projects")}
              className="group flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors mb-6"
            >
              <ChevronLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
              Back to Projects
            </button>
          )}
          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-serif font-medium tracking-tight mb-6">
            {viewMode === "projects" ? "Selected Work" : selectedProject}
          </h1>
          <p className="max-w-xl text-lg text-muted-foreground leading-relaxed">
            {viewMode === "projects" 
              ? "Explore our collection of thoughtfully designed spaces that blend elegance with functionality."
              : projectsMap[selectedProject!]?.category + " project completed in " + projectsMap[selectedProject!]?.year}
          </p>
        </div>
      </section>

      {/* Filter - Only show in projects view */}
      {viewMode === "projects" && (
        <section className="px-6 lg:px-8 pb-8">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex flex-wrap justify-center gap-3 mb-16">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${activeCategory === category
                    ? "bg-primary text-primary-foreground shadow-lg scale-105"
                    : "bg-background border border-border text-muted-foreground hover:bg-accent hover:text-accent-foreground"
                    }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Content Area */}
      <section className="px-6 lg:px-8 pb-24">
        <div className="max-w-7xl mx-auto">
          {viewMode === "projects" ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16">
              {filteredProjects.map((project) => (
                <button
                  key={project.title}
                  onClick={() => {
                    setSelectedProject(project.title)
                    setViewMode("gallery")
                    window.scrollTo({ top: 0, behavior: 'smooth' })
                  }}
                  className="group relative text-left"
                >
                  {/* Stacked Aesthetic Container */}
                  <div className="relative aspect-[4/5] w-full mb-6">
                    {/* Background layers for stacking effect */}
                    <div className="absolute inset-0 bg-muted rounded-2xl transition-transform duration-500 group-hover:rotate-[-4deg] group-hover:-translate-x-2 group-hover:-translate-y-2 opacity-40 translate-x-2 translate-y-2" />
                    <div className="absolute inset-0 bg-muted rounded-2xl transition-transform duration-500 group-hover:rotate-[-2deg] group-hover:-translate-x-1 group-hover:-translate-y-1 opacity-70 translate-x-1 translate-y-1" />
                    
                    {/* Main cover image */}
                    <div className="absolute inset-0 rounded-2xl overflow-hidden shadow-xl bg-muted border border-border/50">
                      <Image
                        src={project.coverImage}
                        alt={project.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                        <div className="flex items-center justify-between text-white">
                          <span className="text-sm font-light">View Project</span>
                          <ArrowUpRight className="w-5 h-5" />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Project Info */}
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-xs text-muted-foreground font-medium uppercase tracking-widest">
                      <span>{project.category}</span>
                      <span className="h-1 w-1 rounded-full bg-foreground/20" />
                      <span>{project.images.length} Photos</span>
                    </div>
                    <h3 className="text-2xl font-serif font-medium group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                  </div>
                </button>
              ))}
            </div>
          ) : (
            /* Masonry Grid for Individual Project Gallery */
            <div className="columns-1 md:columns-2 lg:columns-3 gap-4">
              {projectImages.map((item, index) => (
                <button
                  key={item.id}
                  onClick={() => setSelectedIndex(index)}
                  onMouseEnter={() => setHoveredId(item.id)}
                  onMouseLeave={() => setHoveredId(null)}
                  className="group relative w-full mb-4 break-inside-avoid rounded-2xl overflow-hidden cursor-pointer text-left"
                >
                  <div className={`relative ${item.id % 3 === 0 ? "aspect-[3/4]" : item.id % 2 === 0 ? "aspect-square" : "aspect-[4/3]"
                    } bg-muted`}>
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className={`absolute inset-0 bg-foreground/0 transition-all duration-500 ${hoveredId === item.id ? "bg-foreground/60" : ""
                    }`} />
                  <div className={`absolute inset-0 p-6 flex items-center justify-center transition-opacity duration-300 ${hoveredId === item.id ? "opacity-100" : "opacity-0"
                    }`}>
                    <div className="w-12 h-12 rounded-full bg-background/90 backdrop-blur-sm flex items-center justify-center scale-75 group-hover:scale-100 transition-transform duration-300">
                      <ArrowUpRight className="w-5 h-5" />
                    </div>
                  </div>
                </button>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Lightbox */}
      {selectedIndex !== null && selectedProject && (
        <div
          className="fixed inset-0 z-[200] bg-foreground/95 backdrop-blur-xl flex items-center justify-center"
          onClick={() => setSelectedIndex(null)}
        >
          {/* Close button */}
          <button
            className="absolute top-6 right-6 w-12 h-12 rounded-full bg-background/10 hover:bg-background/20 flex items-center justify-center transition-colors z-10"
            onClick={() => setSelectedIndex(null)}
            aria-label="Close"
          >
            <X className="w-6 h-6 text-background" />
          </button>

          {/* Navigation */}
          <button
            className="absolute left-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-background/10 hover:bg-background/20 flex items-center justify-center transition-colors z-10"
            onClick={(e) => { e.stopPropagation(); handlePrev(); }}
            aria-label="Previous"
          >
            <ChevronLeft className="w-6 h-6 text-background" />
          </button>

          <button
            className="absolute right-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-background/10 hover:bg-background/20 flex items-center justify-center transition-colors z-10"
            onClick={(e) => { e.stopPropagation(); handleNext(); }}
            aria-label="Next"
          >
            <ChevronRight className="w-6 h-6 text-background" />
          </button>

          {/* Image container */}
          <div
            className="relative max-w-6xl w-full h-[75vh] md:h-[85vh] mx-4 md:mx-6 rounded-2xl md:rounded-3xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={projectImages[selectedIndex].image}
              alt={projectImages[selectedIndex].title}
              fill
              unoptimized
              className="object-contain"
            />
          </div>

          {/* Counter */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 px-4 py-2 bg-background/10 rounded-full text-center">
            <p className="text-sm font-medium text-background mb-1">{selectedProject}</p>
            <span className="text-xs text-background/70">
              {selectedIndex + 1} / {projectImages.length}
            </span>
          </div>
        </div>
      )}

      <Footer />
    </main>
  )
}

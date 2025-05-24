import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export type SocialLink = {
  name: string;
  url: string;
  icon: string;
};

export const socialLinks: SocialLink[] = [
  {
    name: "Facebook",
    url: "#",
    icon: "fab fa-facebook-f"
  },
  {
    name: "Twitter",
    url: "#",
    icon: "fab fa-twitter"
  },
  {
    name: "Instagram",
    url: "#",
    icon: "fab fa-instagram"
  },
  {
    name: "YouTube",
    url: "#",
    icon: "fab fa-youtube"
  }
];

export type MenuItem = {
  name: string;
  url: string;
};

export const menuItems: MenuItem[] = [
  {
    name: "Home",
    url: "#home"
  },
  {
    name: "About",
    url: "#about"
  },
  {
    name: "Services",
    url: "#services"
  },
  {
    name: "Mission",
    url: "#mission"
  },
  {
    name: "Gallery",
    url: "#gallery"
  },
  {
    name: "Donate",
    url: "#donate"
  },
  {
    name: "Contact",
    url: "#contact"
  }
];

export type MissionPoint = {
  title: string;
  description: string;
  icon: string;
  emoji?: string;
};

export const missionPoints: MissionPoint[] = [
  {
    title: "Growing spiritually together in the Lord 🙏",
    description: "We foster an environment where each member can grow deeper in their relationship with God through consistent prayer, worship, and fellowship.",
    icon: "fas fa-praying-hands"
  },
  {
    title: "Learning the Word of God together",
    description: "We commit to studying scripture, understanding its teachings, and applying God's wisdom to our daily lives.",
    icon: "fas fa-book-bible"
  },
  {
    title: "Praying for one another 🫂👏",
    description: "We support each other through intercessory prayer, lifting up needs, celebrations, and challenges to our heavenly Father.",
    icon: "fas fa-hands-helping"
  }
];

export type GalleryImage = {
  src: string;
  alt: string;
};

export const galleryImages: GalleryImage[] = [
  {
    src: "https://images.unsplash.com/photo-1519750157634-b6d493a0f77c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
    alt: "Worship service"
  },
  {
    src: "https://pixabay.com/get/g48fb34382e791cf9b4ec367df3c43c9284d74df589e3015a4ea4e7eceedc285d28eff44f5599b2df1d80252d4b3a7da52893f61467c03f0e2185bae1cde9fec3_1280.jpg",
    alt: "Bible study group"
  },
  {
    src: "https://pixabay.com/get/ged388b40ffaf8cb3ca380b56890ddeb0d24193973e08b5d5525db15bc5123a05338a4e2253e0fb884744e666030f8079a168c76ad1390fefc574ce88fd08cbc3_1280.jpg",
    alt: "Prayer circle"
  },
  {
    src: "https://images.unsplash.com/photo-1507692049790-de58290a4334?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    alt: "Community gathering"
  },
  {
    src: "https://images.unsplash.com/photo-1490730141103-6cac27aaab94?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    alt: "Sunset prayer"
  },
  {
    src: "https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1631&q=80",
    alt: "Worship singing"
  }
];

export type Testimonial = {
  type: "quote" | "scripture";
  content: string;
  author?: string;
  role?: string;
  initials?: string;
  reference?: string;
};

export const testimonials: Testimonial[] = [
  {
    type: "quote",
    content: "The Prayer Warriors community has been a lighthouse during my darkest times. Joining the daily prayers has transformed my spiritual journey.",
    author: "Jane M.",
    role: "Member since 2021",
    initials: "JM"
  },
  {
    type: "scripture",
    content: "Do not be anxious about anything, but in every situation, by prayer and petition, with thanksgiving, present your requests to God.",
    reference: "Philippians 4:6"
  },
  {
    type: "quote",
    content: "From Canada to Uganda, I've found a spiritual family that prays together despite the distance. God truly works beyond borders.",
    author: "David T.",
    role: "Member since 2020",
    initials: "DT"
  }
];

export type ContactInfo = {
  icon: string;
  title: string;
  value: string;
};

export const contactInfo: ContactInfo[] = [
  {
    icon: "fas fa-phone",
    title: "Phone",
    value: "+256 706 428 097"
  },
  {
    icon: "fas fa-envelope",
    title: "Email",
    value: "info.prayerwarriors@gmail.com"
  },
  {
    icon: "fas fa-map-marker-alt",
    title: "Location",
    value: "Ntinda, Kampala, Uganda"
  }
];

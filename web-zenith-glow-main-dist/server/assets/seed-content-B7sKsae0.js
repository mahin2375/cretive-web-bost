import { n as supabase } from "./client-vUMwI8Or.js";
import { useQuery } from "@tanstack/react-query";
//#region src/lib/cms.ts
function useProjects(filter) {
	return useQuery({
		queryKey: ["projects", filter ?? "all"],
		queryFn: async () => {
			let q = supabase.from("projects").select("*").eq("published", true).order("display_order");
			if (filter && filter !== "all") q = q.eq("category", filter);
			const { data, error } = await q;
			if (error) throw error;
			return data;
		}
	});
}
function useTeam() {
	return useQuery({
		queryKey: ["team"],
		queryFn: async () => {
			const { data, error } = await supabase.from("team_members").select("*").eq("published", true).order("display_order");
			if (error) throw error;
			return data;
		}
	});
}
function useVideos() {
	return useQuery({
		queryKey: ["videos"],
		queryFn: async () => {
			const { data, error } = await supabase.from("youtube_videos").select("*").order("display_order");
			if (error) throw error;
			return data;
		}
	});
}
function useTestimonials() {
	return useQuery({
		queryKey: ["testimonials"],
		queryFn: async () => {
			const { data, error } = await supabase.from("testimonials").select("*").eq("featured", true).order("display_order");
			if (error) throw error;
			return data;
		}
	});
}
//#endregion
//#region src/assets/portfolio-1.jpg
var portfolio_1_default = "/assets/portfolio-1-Cw8i4XlW.jpg";
//#endregion
//#region src/assets/portfolio-2.jpg
var portfolio_2_default = "/assets/portfolio-2-CBm-J1OS.jpg";
//#endregion
//#region src/assets/portfolio-3.jpg
var portfolio_3_default = "/assets/portfolio-3-zz5hu4N3.jpg";
//#endregion
//#region src/assets/portfolio-4.jpg
var portfolio_4_default = "/assets/portfolio-4-DsrnC2dn.jpg";
//#endregion
//#region src/assets/team-1.jpg
var team_1_default = "/assets/team-1-DQ9WZ2wE.jpg";
//#endregion
//#region src/assets/team-2.jpg
var team_2_default = "/assets/team-2-BchUx2YK.jpg";
//#endregion
//#region src/assets/team-3.jpg
var team_3_default = "/assets/team-3-CWY3Jegp.jpg";
//#endregion
//#region src/assets/team-4.jpg
var team_4_default = "/assets/team-4-C-mtgLhE.jpg";
//#endregion
//#region src/lib/seed-content.ts
var seedProjects = [
	{
		id: "s1",
		title: "Nordic Oak Interiors",
		slug: "nordic-oak",
		category: "Shopify",
		client: "Nordic Oak",
		description: "Custom Shopify Plus build with conversion-first product pages and a +42% lift in mobile checkout.",
		technologies: [
			"Shopify Plus",
			"Liquid",
			"Hydrogen"
		],
		cover_image: portfolio_1_default,
		gallery_images: [],
		live_url: "https://example.com",
		featured: true,
		published: true,
		display_order: 1
	},
	{
		id: "s2",
		title: "Chrono Vault",
		slug: "chrono-vault",
		category: "Shopify",
		client: "Chrono Vault",
		description: "Luxury watch boutique migration to Shopify Plus with bespoke storytelling and headless front-end.",
		technologies: [
			"Shopify",
			"Next.js",
			"GSAP"
		],
		cover_image: portfolio_2_default,
		gallery_images: [],
		live_url: null,
		featured: true,
		published: true,
		display_order: 2
	},
	{
		id: "s3",
		title: "Botanica Skincare",
		slug: "botanica",
		category: "WordPress",
		client: "Botanica",
		description: "Editorial WordPress with WooCommerce, animated brand storytelling and 98 Lighthouse score.",
		technologies: [
			"WordPress",
			"WooCommerce",
			"ACF"
		],
		cover_image: portfolio_3_default,
		gallery_images: [],
		live_url: null,
		featured: true,
		published: true,
		display_order: 3
	},
	{
		id: "s4",
		title: "Orbit SaaS",
		slug: "orbit",
		category: "Landing Page",
		client: "Orbit",
		description: "High-converting SaaS landing page launched in 14 days, driving 3.4x sign-up rate vs. previous site.",
		technologies: ["WordPress", "Headless"],
		cover_image: portfolio_4_default,
		gallery_images: [],
		live_url: null,
		featured: false,
		published: true,
		display_order: 4
	}
];
var seedTeam = [
	{
		id: "t1",
		name: "Leo Vance",
		role: "Founder & Strategy",
		bio: "15+ years scaling DTC brands.",
		photo: team_1_default,
		facebook_url: "#",
		instagram_url: "#",
		linkedin_url: "#",
		display_order: 1,
		published: true
	},
	{
		id: "t2",
		name: "Sarah Green",
		role: "Lead Shopify Engineer",
		bio: "Shopify Plus expert, Liquid wizard.",
		photo: team_2_default,
		facebook_url: "#",
		instagram_url: "#",
		linkedin_url: "#",
		display_order: 2,
		published: true
	},
	{
		id: "t3",
		name: "Marcus Thorne",
		role: "UI Engineer",
		bio: "Interface craft and micro-interactions.",
		photo: team_3_default,
		facebook_url: "#",
		instagram_url: "#",
		linkedin_url: "#",
		display_order: 3,
		published: true
	},
	{
		id: "t4",
		name: "Emma Wu",
		role: "Client Success",
		bio: "Translates vision into shipped product.",
		photo: team_4_default,
		facebook_url: "#",
		instagram_url: "#",
		linkedin_url: "#",
		display_order: 4,
		published: true
	}
];
var seedTestimonials = [
	{
		id: "ts1",
		client_name: "Sarah Jenkins",
		client_role: "Founder",
		company: "Bloom & Co.",
		avatar: null,
		content: "They didn't just build a site; they engineered a growth machine. Mobile checkout abandonment dropped 60% in month one.",
		rating: 5,
		featured: true,
		display_order: 1
	},
	{
		id: "ts2",
		client_name: "David Chen",
		client_role: "CEO",
		company: "AeroWear",
		avatar: null,
		content: "Conversion rate jumped 40% in the first month. They understand commerce, not just code.",
		rating: 5,
		featured: true,
		display_order: 2
	},
	{
		id: "ts3",
		client_name: "Maya Okafor",
		client_role: "Head of Brand",
		company: "Leaf & Soil",
		avatar: null,
		content: "Premium polish on every detail. Our site finally feels like the brand we always wanted.",
		rating: 5,
		featured: true,
		display_order: 3
	}
];
var seedVideos = [
	{
		id: "v1",
		title: "Scaling Shopify Plus for 8-figure Brands",
		channel_name: "Creative Web Boost",
		youtube_url: "https://youtube.com/@creativewebboost",
		thumbnail: portfolio_1_default,
		category: "Shopify",
		featured: true,
		display_order: 1
	},
	{
		id: "v2",
		title: "WordPress Performance Masterclass",
		channel_name: "Creative Web Boost",
		youtube_url: "https://youtube.com/@creativewebboost",
		thumbnail: portfolio_3_default,
		category: "WordPress",
		featured: true,
		display_order: 2
	},
	{
		id: "v3",
		title: "Conversion-First Landing Pages",
		channel_name: "Creative Web Boost",
		youtube_url: "https://youtube.com/@creativewebboost",
		thumbnail: portfolio_4_default,
		category: "CRO",
		featured: true,
		display_order: 3
	}
];
//#endregion
export { useProjects as a, useVideos as c, seedVideos as i, seedTeam as n, useTeam as o, seedTestimonials as r, useTestimonials as s, seedProjects as t };

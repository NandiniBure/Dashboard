import { useEffect, useState } from "react";

import StatCard from "./StatCard";

import RegisteredUsers from "./RegisteredUsers";
import IntegrationList from "./IntegrationList";
import { useDispatch, useSelector } from "react-redux";
import {
	fetchDashboardData,
	setCountry,
	setFilteredData,
} from "../redux/dashboardSlice";
import SalesOverview from "./SalesOverview";

const Dashboard = () => {
	const [selectedCountry, setSelectedCountry] = useState(
    localStorage.getItem("selectedCountry") || "USA"
  );
	const [isSidebarOpen, setIsSidebarOpen] = useState(true);
	const [isDarkMode, setIsDarkMode] = useState(false);
	const [filterdata, setfilterdata] = useState();
	const fullData = useSelector((state) => state.dashboard.data);

	const dispatch = useDispatch();

	const countryData = useSelector((state) => state.dashboard.countryData);

	useEffect(() => {
		if (fullData?.countries?.length > 0) {
			const Data = fullData?.countries?.filter(
				(item) => item.country === countryData
			);
			setfilterdata(Data[0]);
			dispatch(setFilteredData(Data[0]));
		}
	}, [fullData, countryData]);



	// Country data with names and flag URLs

	const countries = [
		{ name: "USA", flag: "https://flagcdn.com/w40/us.png" },
		{ name: "India", flag: "https://flagcdn.com/w40/in.png" },
		{ name: "UK", flag: "https://flagcdn.com/w40/gb.png" },
		{ name: "Canada", flag: "https://flagcdn.com/w40/ca.png" },
		{ name: "Australia", flag: "https://flagcdn.com/w40/au.png" },
	];

	const stats = [
		{
			title: "Total Income",
			value: "33,328.12",
			change: 12.24,
			isPositive: true,
			unit: "$",
		},
		{
			title: "Profit",
			value: "8,583.09",
			change: -2.63,
			isPositive: false,
			unit: "$",
		},
		{
			title: "Total Views",
			value: "33,328.12",
			change: 12.24,
			isPositive: true,
			unit: "$",
		},
		{
			title: "Conversion rate",
			value: "33,328.12",
			change: 12.24,
			isPositive: true,
			unit: "$",
		},
	];

	useEffect(() => {
		if (isDarkMode) {
			document.documentElement.classList.add("dark");
		} else {
			document.documentElement.classList.remove("dark");
		}
	}, [isDarkMode]);

	const menuItems = [
		{
			title: "Dashboard",
			color: "blue",
			icon: (
				<svg
					width='32'
					height='32'
					viewBox='0 0 32 32'
					fill='none'
					xmlns='http://www.w3.org/2000/svg'
				>
					<path
						d='M6.66667 28C5.93333 28 5.30578 27.7391 4.784 27.2173C4.26222 26.6956 4.00089 26.0676 4 25.3333V6.66667C4 5.93333 4.26133 5.30578 4.784 4.784C5.30667 4.26222 5.93422 4.00089 6.66667 4H25.3333C26.0667 4 26.6947 4.26133 27.2173 4.784C27.74 5.30667 28.0009 5.93422 28 6.66667V25.3333C28 26.0667 27.7391 26.6947 27.2173 27.2173C26.6956 27.74 26.0676 28.0009 25.3333 28H6.66667ZM6.66667 25.3333H14.6667V6.66667H6.66667V25.3333ZM17.3333 25.3333H25.3333V16H17.3333V25.3333ZM17.3333 13.3333H25.3333V6.66667H17.3333V13.3333Z'
						fill={isDarkMode ? "white" : "black"}
					/>
				</svg>
			),
		},
		{
			title: "Payment",
			icon: (
				<svg
					width='32'
					height='32'
					viewBox='0 0 32 32'
					fill='none'
					xmlns='http://www.w3.org/2000/svg'
				>
					<path
						d='M25.6 11.2H6.4V8.80002H25.6M25.6 23.2H6.4V16H25.6M25.6 6.40002H6.4C5.068 6.40002 4 7.46802 4 8.80002V23.2C4 23.8365 4.25286 24.447 4.70294 24.8971C5.15303 25.3472 5.76348 25.6 6.4 25.6H25.6C26.2365 25.6 26.847 25.3472 27.2971 24.8971C27.7471 24.447 28 23.8365 28 23.2V8.80002C28 8.1635 27.7471 7.55306 27.2971 7.10297C26.847 6.65288 26.2365 6.40002 25.6 6.40002Z'
						fill={isDarkMode ? "white" : "black"}
					/>
				</svg>
			),
		},
		{
			title: "Customers",
			icon: (
				<svg
					width='32'
					height='32'
					viewBox='0 0 32 32'
					fill='none'
					xmlns='http://www.w3.org/2000/svg'
				>
					<path
						fill-rule='evenodd'
						clip-rule='evenodd'
						d='M12.7274 8.24847C10.9199 8.24847 9.45465 9.71372 9.45465 11.5212C9.45465 13.3287 10.9199 14.7939 12.7274 14.7939C14.5348 14.7939 16.0001 13.3287 16.0001 11.5212C16.0001 10.6942 15.6933 9.93879 15.1874 9.36264L15.1753 9.34893C14.5758 8.67384 13.7012 8.24847 12.7274 8.24847ZM18.1819 11.5212C18.1819 10.5299 17.9175 9.60039 17.4553 8.79932C17.6719 8.65472 17.9058 8.53591 18.1525 8.44609C18.6663 8.25894 19.2188 8.20353 19.7596 8.28493C20.3004 8.36632 20.8121 8.58193 21.2481 8.91205C21.6841 9.24217 22.0304 9.67628 22.2554 10.1747C22.4804 10.6731 22.5769 11.22 22.5361 11.7654C22.4953 12.3107 22.3185 12.8371 22.0218 13.2965C21.7252 13.7559 21.3182 14.1337 20.8379 14.3953C20.3577 14.6568 19.8195 14.7939 19.2727 14.7939C19.2692 14.7939 19.2658 14.7939 19.2624 14.794C18.7596 14.7921 18.0505 14.6505 17.4298 14.2867C17.9078 13.4759 18.1819 12.5305 18.1819 11.5212ZM18.8149 16.9548C20.4274 18.3189 21.4545 20.2355 21.4545 22.4303C21.4545 23.0328 20.9661 23.5212 20.3636 23.5212C19.7611 23.5212 19.2727 23.0328 19.2727 22.4303C19.2727 19.5692 16.5061 16.9757 12.7273 16.9757C8.94845 16.9757 6.18182 19.5692 6.18182 22.4303C6.18182 23.0328 5.6934 23.5212 5.09091 23.5212C4.48842 23.5212 4 23.0328 4 22.4303C4 19.2888 6.10442 16.7172 9.01763 15.52C7.9444 14.5238 7.27283 13.1009 7.27283 11.5212C7.27283 8.50873 9.71491 6.06665 12.7274 6.06665C13.9553 6.06665 15.0886 6.47244 16.0002 7.15723C16.4272 6.83705 16.9005 6.58005 17.4058 6.39602C18.2622 6.0841 19.1831 5.99175 20.0844 6.12741C20.9857 6.26307 21.8386 6.62242 22.5652 7.17262C23.2918 7.72282 23.869 8.44634 24.244 9.27706C24.619 10.1078 24.7798 11.0192 24.7118 11.9281C24.6438 12.837 24.3492 13.7144 23.8548 14.4801C23.6074 14.8632 23.3139 15.2122 22.9822 15.52C25.8955 16.7172 28 19.2888 28 22.4304C28 23.0328 27.5116 23.5213 26.9091 23.5213C26.3066 23.5213 25.8181 23.0328 25.8181 22.4304C25.8181 19.5693 23.0515 16.9758 19.2727 16.9758C19.1309 16.9758 18.9774 16.9692 18.8149 16.9548Z'
						fill={isDarkMode ? "white" : "black"}
					/>
				</svg>
			),
		},
		{
			title: "Messages",
			icon: (
				<svg
					width='32'
					height='32'
					viewBox='0 0 32 32'
					fill='none'
					xmlns='http://www.w3.org/2000/svg'
				>
					<path
						fill-rule='evenodd'
						clip-rule='evenodd'
						d='M8.05263 6.52632C7.38261 6.52632 6.74003 6.79248 6.26626 7.26626C5.79248 7.74003 5.52632 8.38261 5.52632 9.05263V19.1579C5.52632 19.8279 5.79248 20.4705 6.26626 20.9443C6.74003 21.418 7.38261 21.6842 8.05263 21.6842H11.8421C12.1771 21.6842 12.4984 21.8173 12.7353 22.0542L15.6316 24.9505L18.5279 22.0542C18.7648 21.8173 19.086 21.6842 19.4211 21.6842H23.2105C23.8805 21.6842 24.5231 21.418 24.9969 20.9443C25.4707 20.4705 25.7368 19.8279 25.7368 19.1579V9.05263C25.7368 8.38261 25.4707 7.74003 24.9969 7.26626C24.5231 6.79248 23.8805 6.52632 23.2105 6.52632H8.05263ZM4.47988 5.47988C5.42743 4.53233 6.71259 4 8.05263 4H23.2105C24.5506 4 25.8357 4.53233 26.7833 5.47988C27.7308 6.42743 28.2632 7.71259 28.2632 9.05263V19.1579C28.2632 20.4979 27.7308 21.7831 26.7833 22.7306C25.8357 23.6782 24.5506 24.2105 23.2105 24.2105H19.9443L16.5248 27.63C16.0315 28.1233 15.2317 28.1233 14.7384 27.63L11.3189 24.2105H8.05263C6.71259 24.2105 5.42743 23.6782 4.47988 22.7306C3.53233 21.7831 3 20.4979 3 19.1579V9.05263C3 7.71259 3.53233 6.42743 4.47988 5.47988ZM9.31579 11.5789C9.31579 10.8813 9.88132 10.3158 10.5789 10.3158H20.6842C21.3818 10.3158 21.9474 10.8813 21.9474 11.5789C21.9474 12.2766 21.3818 12.8421 20.6842 12.8421H10.5789C9.88132 12.8421 9.31579 12.2766 9.31579 11.5789ZM9.31579 16.6316C9.31579 15.934 9.88132 15.3684 10.5789 15.3684H18.1579C18.8555 15.3684 19.4211 15.934 19.4211 16.6316C19.4211 17.3292 18.8555 17.8947 18.1579 17.8947H10.5789C9.88132 17.8947 9.31579 17.3292 9.31579 16.6316Z'
						fill={isDarkMode ? "white" : "black"}
					/>
				</svg>
			),
		},
		// Add more menu items with icons as needed
	];

	const menuItems1 = [
		{
			title: "Product",
			icon: (
				<svg
					width='32'
					height='32'
					viewBox='0 0 32 32'
					fill='none'
					xmlns='http://www.w3.org/2000/svg'
				>
					<path
						fill-rule='evenodd'
						clip-rule='evenodd'
						d='M13.4545 7.45442C14.1296 6.77928 15.0453 6.4 16.0001 6.4C16.9549 6.4 17.8705 6.77928 18.5457 7.45442C19.2208 8.12955 19.6001 9.04522 19.6001 10L12.4001 10V10C12.4001 9.04522 12.7794 8.12955 13.4545 7.45442ZM10.0001 10.005V10C10.0001 8.4087 10.6322 6.88258 11.7574 5.75736C12.8827 4.63214 14.4088 4 16.0001 4C17.5914 4 19.1175 4.63214 20.2427 5.75736C21.3679 6.88258 22.0001 8.4087 22.0001 10V10.005C22.5976 10.0135 23.1316 10.0365 23.5933 10.0986C24.3801 10.2045 25.1337 10.4431 25.7453 11.0547C26.3568 11.6662 26.5955 12.4199 26.7013 13.2066C26.8001 13.9405 26.8 14.857 26.8 15.9209V15.9209L26.8 17.2878C26.8 19.4758 26.8 21.2396 26.6134 22.6268C26.4198 24.0668 26.0054 25.2794 25.0421 26.2421C24.0793 27.2055 22.8667 27.6198 21.4267 27.8135C20.0395 28.0001 18.2758 28 16.0878 28H15.9122C13.7242 28 11.9604 28.0001 10.5732 27.8135C9.13338 27.6198 7.92087 27.2056 6.95819 26.2425C5.99479 25.2797 5.58014 24.0668 5.38647 22.6268C5.1999 21.2396 5.19992 19.4758 5.19996 17.2878L5.19996 16L5.19995 15.9209C5.19989 14.857 5.19984 13.9405 5.29857 13.2066C5.40441 12.4199 5.64308 11.6662 6.25463 11.0547C6.86618 10.4431 7.61981 10.2045 8.40657 10.0986C8.86836 10.0365 9.40245 10.0135 10.0001 10.005ZM13.6001 16C13.6001 15.3373 13.0628 14.8 12.4001 14.8C11.7373 14.8 11.2001 15.3373 11.2001 16V18.4C11.2001 19.0627 11.7373 19.6 12.4001 19.6C13.0628 19.6 13.6001 19.0627 13.6001 18.4V16ZM20.8001 16C20.8001 15.3373 20.2628 14.8 19.6001 14.8C18.9373 14.8 18.4001 15.3373 18.4001 16V18.4C18.4001 19.0627 18.9373 19.6 19.6001 19.6C20.2628 19.6 20.8001 19.0627 20.8001 18.4V16ZM7.95169 12.7517C8.04334 12.6601 8.2065 12.5472 8.72655 12.4772C9.16249 12.4185 9.72084 12.4044 10.5055 12.401C10.7195 12.4001 10.9503 12.4 11.2 12.4H20.8C21.9655 12.4 22.7186 12.4026 23.2734 12.4772C23.7934 12.5472 23.9566 12.6601 24.0482 12.7517C24.1399 12.8434 24.2528 13.0065 24.3228 13.5266C24.3974 14.0814 24.4 14.8344 24.4 16V17.2C24.4 19.4965 24.3974 21.0983 24.2349 22.3068C24.077 23.4809 23.7874 24.103 23.3447 24.5454C22.9023 24.9882 22.2808 25.277 21.1068 25.4349C19.8983 25.5975 18.2965 25.6 16 25.6C13.7034 25.6 12.1016 25.5975 10.8931 25.4349C9.7191 25.277 9.09693 24.9875 8.65452 24.5447C8.27676 24.1673 8.01108 23.6595 7.84315 22.7895C7.81424 22.6397 7.78823 22.4792 7.76505 22.3069C7.60251 21.0983 7.59996 19.4965 7.59996 17.2V16C7.59996 14.8344 7.60251 14.0814 7.67714 13.5266C7.7471 13.0065 7.86003 12.8434 7.95169 12.7517Z'
						fill={isDarkMode ? "white" : "black"}
					/>
				</svg>
			),
		},
		{
			title: "Invoice",
			icon: (
				<svg
					width='32'
					height='32'
					viewBox='0 0 32 32'
					fill='none'
					xmlns='http://www.w3.org/2000/svg'
				>
					<path
						d='M17.9151 12.6877C17.9151 12.4339 17.8143 12.1905 17.6348 12.011C17.4553 11.8315 17.2119 11.7307 16.9581 11.7307H9.30199C9.04817 11.7307 8.80475 11.8315 8.62527 12.011C8.4458 12.1905 8.34497 12.4339 8.34497 12.6877C8.34497 12.9415 8.4458 13.185 8.62527 13.3644C8.80475 13.5439 9.04817 13.6447 9.30199 13.6447H16.9581C17.2119 13.6447 17.4553 13.5439 17.6348 13.3644C17.8143 13.185 17.9151 12.9415 17.9151 12.6877ZM16.6391 16.5158C16.6391 16.262 16.5383 16.0186 16.3588 15.8391C16.1793 15.6596 15.9359 15.5588 15.6821 15.5588H9.30199C9.04817 15.5588 8.80475 15.6596 8.62527 15.8391C8.4458 16.0186 8.34497 16.262 8.34497 16.5158C8.34497 16.7696 8.4458 17.013 8.62527 17.1925C8.80475 17.372 9.04817 17.4728 9.30199 17.4728H15.6821C15.9359 17.4728 16.1793 17.372 16.3588 17.1925C16.5383 17.013 16.6391 16.7696 16.6391 16.5158ZM16.9581 19.3868C17.2119 19.3868 17.4553 19.4877 17.6348 19.6671C17.8143 19.8466 17.9151 20.09 17.9151 20.3439C17.9151 20.5977 17.8143 20.8411 17.6348 21.0206C17.4553 21.2 17.2119 21.3009 16.9581 21.3009H9.30199C9.04817 21.3009 8.80475 21.2 8.62527 21.0206C8.4458 20.8411 8.34497 20.5977 8.34497 20.3439C8.34497 20.09 8.4458 19.8466 8.62527 19.6671C8.80475 19.4877 9.04817 19.3868 9.30199 19.3868H16.9581Z'
						fill={isDarkMode ? "white" : "black"}
					/>
					<path
						fill-rule='evenodd'
						clip-rule='evenodd'
						d='M8.34514 28H24.9334C25.8641 28 26.7566 27.6303 27.4147 26.9722C28.0728 26.3141 28.4425 25.4216 28.4425 24.4909V17.4728C28.4425 17.219 28.3416 16.9756 28.1622 16.7961C27.9827 16.6166 27.7393 16.5158 27.4855 16.5158H23.3384V6.55392C23.3384 4.73814 21.2853 3.68159 19.8076 4.73686L19.5843 4.89637C19.0953 5.24348 18.5103 5.42952 17.9107 5.42861C17.311 5.42769 16.7265 5.23986 16.2386 4.89126C15.424 4.31152 14.449 4 13.4492 4C12.4494 4 11.4744 4.31152 10.6598 4.89126C10.1719 5.23986 9.58745 5.42769 8.98779 5.42861C8.38813 5.42952 7.8031 5.24348 7.31411 4.89637L7.09081 4.73686C5.61318 3.68159 3.56006 4.73686 3.56006 6.55392V23.2149C3.56006 24.484 4.0642 25.7011 4.96158 26.5985C5.85895 27.4959 7.07606 28 8.34514 28ZM11.7725 6.44801C12.2625 6.10022 12.8484 5.91339 13.4492 5.91339C14.05 5.91339 14.636 6.10022 15.1259 6.44801C15.9384 7.02875 16.9118 7.34149 17.9104 7.34264C18.9091 7.34378 19.8832 7.03327 20.697 6.45439L20.9203 6.29488C20.968 6.26095 21.024 6.24078 21.0824 6.23657C21.1407 6.23236 21.1991 6.24428 21.2512 6.27102C21.3032 6.29776 21.3469 6.3383 21.3774 6.38819C21.408 6.43808 21.4242 6.49541 21.4244 6.55392V24.4909C21.4244 25.0652 21.5622 25.6075 21.8072 26.086H8.34514C7.58369 26.086 6.85343 25.7835 6.315 25.2451C5.77657 24.7066 5.47409 23.9764 5.47409 23.2149V6.55392C5.47424 6.49541 5.49048 6.43808 5.52103 6.38819C5.55157 6.3383 5.59525 6.29776 5.64728 6.27102C5.69931 6.24428 5.75769 6.23236 5.81604 6.23657C5.87439 6.24078 5.93046 6.26095 5.97812 6.29488L6.20142 6.45439C7.0152 7.03327 7.98933 7.34378 8.988 7.34264C9.98666 7.34149 10.9601 7.02875 11.7725 6.44801ZM23.3384 24.4909V18.4298H26.5284V24.4909C26.5284 24.914 26.3604 25.3197 26.0613 25.6188C25.7621 25.9179 25.3564 26.086 24.9334 26.086C24.5104 26.086 24.1047 25.9179 23.8056 25.6188C23.5064 25.3197 23.3384 24.914 23.3384 24.4909Z'
						fill={isDarkMode ? "white" : "black"}
					/>
				</svg>
			),
		},
		{
			title: "Analytics",
			icon: (
				<svg
					width='32'
					height='32'
					viewBox='0 0 32 32'
					fill='none'
					xmlns='http://www.w3.org/2000/svg'
				>
					<path
						fill-rule='evenodd'
						clip-rule='evenodd'
						d='M27.6056 10.9587C27.6472 10.9955 27.6862 11.0352 27.7222 11.0775C27.7861 11.1524 27.8389 11.2336 27.8808 11.3187C27.9572 11.4739 28.0001 11.6486 28.0001 11.8333V15.3333C28.0001 15.9777 27.4778 16.5 26.8335 16.5C26.1891 16.5 25.6668 15.9777 25.6668 15.3333V14.6498L20.6583 19.6582C20.2027 20.1139 19.464 20.1139 19.0084 19.6582L15.1667 15.8165L11.325 19.6582C10.8694 20.1139 10.1307 20.1139 9.67508 19.6582C9.21947 19.2026 9.21947 18.4639 9.67508 18.0083L14.3417 13.3417C14.7974 12.8861 15.5361 12.8861 15.9917 13.3417L19.8334 17.1834L24.0168 13H23.3335C22.6891 13 22.1668 12.4777 22.1668 11.8333C22.1668 11.189 22.6891 10.6667 23.3335 10.6667H26.8236H26.8335C26.8632 10.6667 26.8928 10.6678 26.922 10.67C26.8892 10.6675 26.8564 10.6664 26.8236 10.6667M27.2701 10.7511C27.3902 10.7995 27.5039 10.8687 27.6056 10.9587L27.2701 10.7511Z'
						fill={isDarkMode ? "white" : "black"}
					/>
					<path
						fill-rule='evenodd'
						clip-rule='evenodd'
						d='M5.2 4C5.86274 4 6.4 4.53726 6.4 5.2V22C6.4 23.9882 8.01178 25.6 10 25.6H26.8C27.4627 25.6 28 26.1373 28 26.8C28 27.4627 27.4627 28 26.8 28H10C6.68629 28 4 25.3137 4 22V5.2C4 4.53726 4.53726 4 5.2 4Z'
						fill={isDarkMode ? "white" : "black"}
					/>
				</svg>
			),
		},
		// Add more menu items with icons as needed
	];

	const menuItems2 = [
		{
			title: "Settings",
			icon: (
				<svg
					width='32'
					height='32'
					viewBox='0 0 32 32'
					fill='none'
					xmlns='http://www.w3.org/2000/svg'
				>
					<path
						d='M25.8592 16.7919C25.6668 16.5729 25.5607 16.2915 25.5607 16C25.5607 15.7086 25.6668 15.4271 25.8592 15.2081L27.3949 13.4803C27.5642 13.2916 27.6693 13.054 27.6951 12.8018C27.721 12.5496 27.6663 12.2957 27.5389 12.0765L25.1393 7.9251C25.0132 7.70615 24.8212 7.5326 24.5906 7.42919C24.3601 7.32577 24.1028 7.29777 23.8554 7.34918L21.5997 7.80511C21.3127 7.86442 21.0139 7.81662 20.7597 7.67073C20.5055 7.52485 20.3135 7.29096 20.2199 7.01322L19.488 4.81752C19.4075 4.57921 19.2542 4.37222 19.0496 4.22581C18.8451 4.0794 18.5997 4.00098 18.3482 4.00163H13.5488C13.2872 3.98798 13.0283 4.06034 12.8116 4.20766C12.595 4.35499 12.4325 4.56918 12.349 4.81752L11.6771 7.01322C11.5835 7.29096 11.3915 7.52485 11.1373 7.67073C10.8831 7.81662 10.5843 7.86442 10.2973 7.80511L7.98159 7.34918C7.74708 7.31604 7.50801 7.35304 7.2945 7.45553C7.08099 7.55802 6.90258 7.7214 6.78175 7.9251L4.38208 12.0765C4.25149 12.2933 4.19277 12.5458 4.21432 12.7979C4.23587 13.05 4.33658 13.2889 4.50206 13.4803L6.02585 15.2081C6.21821 15.4271 6.3243 15.7086 6.3243 16C6.3243 16.2915 6.21821 16.5729 6.02585 16.7919L4.50206 18.5197C4.33658 18.7111 4.23587 18.95 4.21432 19.2021C4.19277 19.4542 4.25149 19.7067 4.38208 19.9235L6.78175 24.0749C6.90785 24.2938 7.09985 24.4674 7.33038 24.5708C7.56091 24.6742 7.8182 24.7022 8.06558 24.6508L10.3213 24.1949C10.6083 24.1356 10.9071 24.1834 11.1613 24.3293C11.4155 24.4752 11.6075 24.709 11.7011 24.9868L12.433 27.1825C12.5165 27.4308 12.6789 27.645 12.8956 27.7923C13.1123 27.9397 13.3712 28.012 13.6328 27.9984H18.4322C18.6837 27.999 18.9291 27.9206 19.1336 27.7742C19.3382 27.6278 19.4915 27.4208 19.572 27.1825L20.3039 24.9868C20.3975 24.709 20.5895 24.4752 20.8437 24.3293C21.0979 24.1834 21.3967 24.1356 21.6837 24.1949L23.9394 24.6508C24.1868 24.7022 24.4441 24.6742 24.6746 24.5708C24.9051 24.4674 25.0971 24.2938 25.2232 24.0749L27.6229 19.9235C27.7503 19.7043 27.805 19.4504 27.7791 19.1982C27.7533 18.946 27.6482 18.7084 27.4789 18.5197L25.8592 16.7919ZM24.0714 18.3997L25.0313 19.4795L23.4955 22.1432L22.0797 21.8552C21.2155 21.6786 20.3166 21.8253 19.5535 22.2677C18.7905 22.7101 18.2164 23.4172 17.9402 24.2549L17.4843 25.5987H14.4127L13.9808 24.2309C13.7046 23.3932 13.1305 22.6861 12.3675 22.2437C11.6044 21.8014 10.7055 21.6546 9.84134 21.8312L8.42553 22.1192L6.86574 19.4675L7.82561 18.3877C8.41588 17.7277 8.7422 16.8734 8.7422 15.988C8.7422 15.1026 8.41588 14.2483 7.82561 13.5883L6.86574 12.5085L8.40153 9.86883L9.81734 10.1568C10.6815 10.3334 11.5804 10.1866 12.3435 9.74429C13.1065 9.30193 13.6806 8.5948 13.9568 7.75712L14.4127 6.40131H17.4843L17.9402 7.76912C18.2164 8.6068 18.7905 9.31393 19.5535 9.75629C20.3166 10.1986 21.2155 10.3454 22.0797 10.1688L23.4955 9.88083L25.0313 12.5445L24.0714 13.6243C23.4878 14.2827 23.1655 15.1321 23.1655 16.012C23.1655 16.8919 23.4878 17.7413 24.0714 18.3997ZM15.9485 11.2007C14.9993 11.2007 14.0714 11.4821 13.2821 12.0095C12.4929 12.5368 11.8777 13.2864 11.5145 14.1634C11.1512 15.0403 11.0562 16.0053 11.2414 16.9363C11.4266 17.8673 11.8837 18.7225 12.5549 19.3937C13.2261 20.0649 14.0812 20.5219 15.0122 20.7071C15.9432 20.8923 16.9082 20.7973 17.7851 20.434C18.6621 20.0708 19.4117 19.4556 19.939 18.6664C20.4664 17.8771 20.7479 16.9492 20.7479 16C20.7479 14.7271 20.2422 13.5064 19.3422 12.6063C18.4421 11.7063 17.2214 11.2007 15.9485 11.2007ZM15.9485 18.3997C15.4739 18.3997 15.0099 18.2589 14.6153 17.9953C14.2207 17.7316 13.9131 17.3568 13.7315 16.9183C13.5499 16.4798 13.5023 15.9973 13.5949 15.5318C13.6875 15.0664 13.9161 14.6388 14.2517 14.3032C14.5873 13.9676 15.0149 13.739 15.4804 13.6464C15.9458 13.5538 16.4283 13.6014 16.8668 13.783C17.3053 13.9646 17.6801 14.2722 17.9438 14.6668C18.2074 15.0614 18.3482 15.5254 18.3482 16C18.3482 16.6364 18.0954 17.2468 17.6453 17.6968C17.1953 18.1469 16.5849 18.3997 15.9485 18.3997Z'
						fill={isDarkMode ? "white" : "black"}
					/>
				</svg>
			),
		},
		{
			title: "Security",
			icon: (
				<svg
					width='32'
					height='32'
					viewBox='0 0 32 32'
					fill='none'
					xmlns='http://www.w3.org/2000/svg'
				>
					<path
						d='M15.0113 4.1898L7.30934 7.61169C6.51713 7.96378 6 8.75599 6 9.62522V14.7966C6 20.9032 10.2251 26.6136 15.9026 28C21.5801 26.6136 25.8052 20.9032 25.8052 14.7966V9.62522C25.8052 8.75599 25.288 7.96378 24.4958 7.61169L16.7938 4.1898C16.2327 3.93673 15.5725 3.93673 15.0113 4.1898ZM15.9026 15.8858H23.6046C23.0214 20.419 19.9956 24.4571 15.9026 25.7224V15.8968H8.20057V9.62522L15.9026 6.20332V15.8858Z'
						fill={isDarkMode ? "white" : "black"}
					/>
				</svg>
			),
		},
		{
			title: "Help",
			icon: (
				<svg
					width='32'
					height='32'
					viewBox='0 0 32 32'
					fill='none'
					xmlns='http://www.w3.org/2000/svg'
				>
					<path
						d='M15.94 23.2C16.36 23.2 16.7152 23.0548 17.0056 22.7644C17.296 22.474 17.4408 22.1192 17.44 21.7C17.44 21.28 17.2952 20.9248 17.0056 20.6344C16.716 20.344 16.3608 20.1992 15.94 20.2C15.52 20.2 15.1652 20.3452 14.8756 20.6356C14.586 20.926 14.4408 21.2808 14.44 21.7C14.44 22.12 14.5852 22.4752 14.8756 22.7656C15.166 23.056 15.5208 23.2008 15.94 23.2ZM14.86 18.58H17.08C17.08 17.92 17.1552 17.4 17.3056 17.02C17.456 16.64 17.8808 16.12 18.58 15.46C19.1 14.94 19.51 14.4448 19.81 13.9744C20.11 13.504 20.26 12.9392 20.26 12.28C20.26 11.16 19.85 10.3 19.03 9.7C18.21 9.1 17.24 8.8 16.12 8.8C14.98 8.8 14.0552 9.1 13.3456 9.7C12.636 10.3 12.1408 11.02 11.86 11.86L13.84 12.64C13.94 12.28 14.1652 11.89 14.5156 11.47C14.866 11.05 15.4008 10.84 16.12 10.84C16.76 10.84 17.24 11.0152 17.56 11.3656C17.88 11.716 18.04 12.1008 18.04 12.52C18.04 12.92 17.92 13.2952 17.68 13.6456C17.44 13.996 17.14 14.3208 16.78 14.62C15.9 15.4 15.36 15.99 15.16 16.39C14.96 16.79 14.86 17.52 14.86 18.58ZM16 28C14.34 28 12.78 27.6852 11.32 27.0556C9.86 26.426 8.59 25.5708 7.51 24.49C6.43 23.41 5.5752 22.14 4.9456 20.68C4.316 19.22 4.0008 17.66 4 16C4 14.34 4.3152 12.78 4.9456 11.32C5.576 9.86 6.4308 8.59 7.51 7.51C8.59 6.43 9.86 5.5752 11.32 4.9456C12.78 4.316 14.34 4.0008 16 4C17.66 4 19.22 4.3152 20.68 4.9456C22.14 5.576 23.41 6.4308 24.49 7.51C25.57 8.59 26.4252 9.86 27.0556 11.32C27.686 12.78 28.0008 14.34 28 16C28 17.66 27.6848 19.22 27.0544 20.68C26.424 22.14 25.5692 23.41 24.49 24.49C23.41 25.57 22.14 26.4252 20.68 27.0556C19.22 27.686 17.66 28.0008 16 28ZM16 25.6C18.68 25.6 20.95 24.67 22.81 22.81C24.67 20.95 25.6 18.68 25.6 16C25.6 13.32 24.67 11.05 22.81 9.19C20.95 7.33 18.68 6.4 16 6.4C13.32 6.4 11.05 7.33 9.19 9.19C7.33 11.05 6.4 13.32 6.4 16C6.4 18.68 7.33 20.95 9.19 22.81C11.05 24.67 13.32 25.6 16 25.6Z'
						fill={isDarkMode ? "white" : "black"}
					/>
				</svg>
			),
		},
		// Add more menu items with icons as needed
	];

	return (
    <div className="flex">
      {/* Sidebar */}
      <div
        className={`h-screen  bg-white-200 border border-solid  dark:bg-[#1F214A] pl-4 pr-4 transition-all duration-300 ${
          isSidebarOpen ? "w-48" : "w-20"
        }`}
      >
        <div className="flex items-center mt-2  justify-center ">
          {/* SellerApp Logo */}
          {isSidebarOpen ? (
            <h1
              className="text-xl  dark:text-white font-light"
              style={{
                fontFamily: "'YourFontName', sans-serif", // Replace 'YourFontName' with the actual font name
                letterSpacing: "2px", // Adjust spacing as needed
              }}
            >
              Sellerapp
            </h1>
          ) : isDarkMode ? (
            <img
              src="./SellerApp Icon Logo (1).png"
              alt="SellerApp Logo"
              className={`h-8 ${isSidebarOpen ? "ml-2" : ""}`}
            />
          ) : (
            <img
              src="./SellerApp Icon Logo.png"
              alt="SellerApp Logo"
              className={`h-8 ${isSidebarOpen ? "ml-2" : ""}`}
            />
          )}

          {/* Arrow Icon */}
          <button
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className={`transition-transform duration-300 ${
              isSidebarOpen ? "ml-4" : ""
            }`}
          >
            {isDarkMode ? (
              <img
                src="./octicon_arrow-up-16 (2).png"
                alt="Toggle Arrow"
                className={`transform ${
                  isSidebarOpen ? "rotate-180" : "rotate-360 "
                } w-5`}
              />
            ) : (
              <img
                src="./octicon_arrow-up-16.png"
                alt="Toggle Arrow"
                className={`transform ${
                  isSidebarOpen ? "rotate-180" : "rotate-360 "
                } w-5`}
              />
            )}
          </button>
        </div>

        <ul className="mt-1">
          {menuItems.map((item, index) => (
            <li
              key={index}
              className="flex  dark:text-white items-center gap-4 p-2 font-bold  rounded-lg cursor-pointer hover:bg-blue-100 hover:text-blue-600 transition duration-300"
            >
              {item.icon}
              {isSidebarOpen && <> {item.title}</>}
            </li>
          ))}
          <div className="border-t mt-1 border-gray-300 mb-1 w-full"></div>
          {menuItems1.map((item, index) => (
            <li
              key={index}
              className="flex items-center font-bold  dark:text-white  gap-4 p-2 rounded-lg cursor-pointer hover:bg-blue-100 hover:text-blue-600 transition duration-300"
            >
              {item.icon}
              {isSidebarOpen && <>{item.title}</>}
            </li>
          ))}
          <div className="border-t  mt-1 mb-1 border-gray-300 w-full"></div>
          {menuItems2.map((item, index) => (
            <li
              key={index}
              className="flex items-center font-bold dark:text-white  gap-4 p-2 rounded-lg cursor-pointer hover:bg-blue-100 hover:text-blue-600 transition duration-300"
            >
              {item.icon}
              {isSidebarOpen && <>{item.title}</>}
            </li>
          ))}

          <div className="border-t  mt-1 mb-1 border-gray-300 w-full"></div>

          <li className="flex font-bold mt-1 dark:text-white  items-center gap-4 p-2 rounded-lg cursor-pointer hover:bg-blue-100 hover:text-blue-600 transition duration-300">
            <>
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15.4274 26.8387C15.4274 26.5307 15.5497 26.2353 15.7675 26.0176C15.9853 25.7998 16.2807 25.6774 16.5887 25.6774H25.879C25.9816 25.6774 26.0801 25.6366 26.1527 25.564C26.2253 25.4914 26.2661 25.393 26.2661 25.2903V6.70968C26.2661 6.60701 26.2253 6.50855 26.1527 6.43596C26.0801 6.36336 25.9816 6.32258 25.879 6.32258H16.5887C16.2807 6.32258 15.9853 6.20023 15.7675 5.98245C15.5497 5.76466 15.4274 5.46928 15.4274 5.16129C15.4274 4.8533 15.5497 4.55792 15.7675 4.34013C15.9853 4.12235 16.2807 4 16.5887 4H25.879C27.3747 4 28.5887 5.21394 28.5887 6.70968V25.2903C28.5887 26.009 28.3032 26.6982 27.795 27.2064C27.2868 27.7145 26.5976 28 25.879 28H16.5887C16.2807 28 15.9853 27.8777 15.7675 27.6599C15.5497 27.4421 15.4274 27.1467 15.4274 26.8387Z"
                  fill={isDarkMode ? "white" : "black"}
                />
                <path
                  d="M22.1816 17.7265C22.1816 18.1371 22.0185 18.531 21.7281 18.8213C21.4377 19.1117 21.0439 19.2748 20.6332 19.2748H13.1142C13.0786 19.8261 13.0337 20.3742 12.9811 20.9254L12.9346 21.3977C12.9173 21.5757 12.8573 21.7469 12.7598 21.8967C12.6622 22.0466 12.5299 22.1707 12.3742 22.2585C12.2184 22.3464 12.0438 22.3953 11.865 22.4013C11.6863 22.4072 11.5088 22.3699 11.3475 22.2926C8.51704 20.9361 5.95467 19.0798 3.78366 16.8129L3.73721 16.7649C3.53791 16.5571 3.42664 16.2802 3.42664 15.9923C3.42664 15.7043 3.53791 15.4275 3.73721 15.2196L3.78366 15.1716C5.95465 12.9047 8.51703 11.0484 11.3475 9.69188C11.5088 9.61458 11.6863 9.57731 11.865 9.58326C12.0438 9.5892 12.2184 9.63816 12.3742 9.726C12.5299 9.81383 12.6622 9.93795 12.7598 10.0878C12.8573 10.2377 12.9173 10.4089 12.9346 10.5868L12.9811 11.0591C13.0337 11.6088 13.0786 12.1585 13.1142 12.7097H20.6332C21.0439 12.7097 21.4377 12.8728 21.7281 13.1632C22.0185 13.4536 22.1816 13.8474 22.1816 14.2581V17.7265Z"
                  fill={isDarkMode ? "white" : "black"}
                />
              </svg>

              {isSidebarOpen && <>Log Out</>}
            </>
          </li>
        </ul>

        <div className="flex  items-center  justify-between p-2 mt-14  ">
          <button
            className="relative flex items-center justify-between w-14 h-8 rounded-full bg-blue-500 dark:bg-gray-700 transition"
            onClick={() => setIsDarkMode(!isDarkMode)}
          >
            {/* Sun Icon */}
            <div
              className={`absolute left-1 top-1 w-6 h-6 rounded-full flex items-center justify-center transition-transform text-yellow-400 ${
                isDarkMode
                  ? "translate-x-6 bg-gray-900"
                  : "translate-x-0 bg-white"
              }`}
            >
              {isDarkMode ? (
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 h-4 text-yellow-400"
                >
                  <path
                    d="M27.9524 19.3116C27.1922 21.7939 25.6685 23.9732 23.5983 25.5393C21.7807 26.9076 19.6178 27.7421 17.3524 27.9492C15.087 28.1563 12.8087 27.7277 10.7733 26.7116C8.73786 25.6955 7.02585 24.1321 5.82942 22.1968C4.633 20.2616 3.99951 18.0311 4.00006 15.7557C3.99188 13.0999 4.85507 10.5147 6.45719 8.39678C8.02296 6.32611 10.2018 4.80212 12.6836 4.0417C12.8472 3.99132 13.0214 3.9865 13.1875 4.02774C13.3536 4.06899 13.5053 4.15475 13.6263 4.2758C13.7473 4.39685 13.8331 4.54861 13.8743 4.71475C13.9156 4.88089 13.9107 5.05514 13.8604 5.21875C13.3177 7.01425 13.2722 8.92339 13.7287 10.7427C14.1853 12.5621 15.1267 14.2234 16.4528 15.5498C17.7789 16.8761 19.4398 17.8178 21.2588 18.2744C23.0777 18.7311 24.9864 18.6856 26.7815 18.1428C26.9451 18.0924 27.1193 18.0876 27.2854 18.1288C27.4515 18.1701 27.6032 18.2558 27.7243 18.3769C27.8453 18.4979 27.931 18.6497 27.9723 18.8158C28.0135 18.982 28.0087 19.1562 27.9583 19.3198L27.9524 19.3116Z"
                    fill="yellow"
                  />
                </svg>
              ) : (
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 h-4 text-yellow-400"
                >
                  <path
                    d="M15.9999 23C16.2651 23 16.5194 23.1054 16.707 23.2929C16.8945 23.4804 16.9999 23.7348 16.9999 24V25C16.9999 25.2652 16.8945 25.5196 16.707 25.7071C16.5194 25.8946 16.2651 26 15.9999 26C15.7347 26 15.4803 25.8946 15.2928 25.7071C15.1052 25.5196 14.9999 25.2652 14.9999 25V24C14.9999 23.7348 15.1052 23.4804 15.2928 23.2929C15.4803 23.1054 15.7347 23 15.9999 23ZM22.3639 20.95L23.0709 21.657C23.253 21.8456 23.3538 22.0982 23.3515 22.3604C23.3493 22.6226 23.2441 22.8734 23.0587 23.0588C22.8733 23.2442 22.6225 23.3494 22.3603 23.3517C22.0981 23.354 21.8455 23.2532 21.6569 23.071L20.9499 22.364C20.7677 22.1754 20.6669 21.9228 20.6692 21.6606C20.6715 21.3984 20.7766 21.1476 20.962 20.9622C21.1475 20.7768 21.3983 20.6716 21.6605 20.6693C21.9227 20.667 22.1753 20.7678 22.3639 20.95ZM9.63587 20.95C9.81583 20.7707 10.0573 20.6665 10.3113 20.6588C10.5652 20.651 10.8126 20.7402 11.0031 20.9082C11.1937 21.0763 11.3132 21.3106 11.3373 21.5635C11.3614 21.8164 11.2883 22.069 11.1329 22.27L11.0499 22.364L10.3429 23.071C10.1629 23.2503 9.92143 23.3545 9.66748 23.3622C9.41354 23.37 9.16616 23.2808 8.97559 23.1128C8.78502 22.9447 8.66556 22.7104 8.64147 22.4575C8.61738 22.2046 8.69046 21.952 8.84587 21.751L8.92887 21.657L9.63587 20.95ZM15.9999 10C17.5912 10 19.1173 10.6321 20.2425 11.7574C21.3677 12.8826 21.9999 14.4087 21.9999 16C21.9999 17.5913 21.3677 19.1174 20.2425 20.2426C19.1173 21.3679 17.5912 22 15.9999 22C14.4086 22 12.8824 21.3679 11.7572 20.2426C10.632 19.1174 9.99987 17.5913 9.99987 16C9.99987 14.4087 10.632 12.8826 11.7572 11.7574C12.8824 10.6321 14.4086 10 15.9999 10ZM7.99987 15C8.25475 15.0003 8.4999 15.0979 8.68524 15.2728C8.87057 15.4478 8.9821 15.687 8.99704 15.9414C9.01198 16.1958 8.92919 16.4464 8.7656 16.6418C8.60201 16.8373 8.36996 16.9629 8.11687 16.993L7.99987 17H6.99987C6.74499 16.9997 6.49984 16.9021 6.3145 16.7272C6.12916 16.5522 6.01763 16.313 6.0027 16.0586C5.98776 15.8042 6.07054 15.5536 6.23413 15.3582C6.39772 15.1627 6.62977 15.0371 6.88287 15.007L6.99987 15H7.99987ZM24.9999 15C25.2651 15 25.5194 15.1054 25.707 15.2929C25.8945 15.4804 25.9999 15.7348 25.9999 16C25.9999 16.2652 25.8945 16.5196 25.707 16.7071C25.5194 16.8946 25.2651 17 24.9999 17H23.9999C23.7346 17 23.4803 16.8946 23.2928 16.7071C23.1052 16.5196 22.9999 16.2652 22.9999 16C22.9999 15.7348 23.1052 15.4804 23.2928 15.2929C23.4803 15.1054 23.7346 15 23.9999 15H24.9999ZM8.92887 8.929C9.10106 8.75682 9.33016 8.65339 9.57319 8.63811C9.81621 8.62283 10.0565 8.69675 10.2489 8.846L10.3429 8.929L11.0499 9.636C11.2292 9.81596 11.3333 10.0574 11.3411 10.3114C11.3489 10.5653 11.2597 10.8127 11.0916 11.0033C10.9236 11.1938 10.6893 11.3133 10.4364 11.3374C10.1835 11.3615 9.93086 11.2884 9.72987 11.133L9.63587 11.05L8.92887 10.343C8.7414 10.1555 8.63608 9.90116 8.63608 9.636C8.63608 9.37084 8.7414 9.11653 8.92887 8.929ZM23.0709 8.929C23.2583 9.11653 23.3637 9.37084 23.3637 9.636C23.3637 9.90116 23.2583 10.1555 23.0709 10.343L22.3639 11.05C22.2716 11.1455 22.1613 11.2217 22.0393 11.2741C21.9173 11.3265 21.786 11.3541 21.6533 11.3553C21.5205 11.3564 21.3888 11.3311 21.2659 11.2808C21.143 11.2305 21.0314 11.1563 20.9375 11.0624C20.8436 10.9685 20.7693 10.8569 20.719 10.734C20.6688 10.6111 20.6435 10.4794 20.6446 10.3466C20.6458 10.2138 20.6734 10.0826 20.7258 9.9606C20.7782 9.83859 20.8544 9.72825 20.9499 9.636L21.6569 8.929C21.8444 8.74153 22.0987 8.63621 22.3639 8.63621C22.629 8.63621 22.8833 8.74153 23.0709 8.929ZM15.9999 6C16.2651 6 16.5194 6.10536 16.707 6.29289C16.8945 6.48043 16.9999 6.73478 16.9999 7V8C16.9999 8.26522 16.8945 8.51957 16.707 8.70711C16.5194 8.89464 16.2651 9 15.9999 9C15.7347 9 15.4803 8.89464 15.2928 8.70711C15.1052 8.51957 14.9999 8.26522 14.9999 8V7C14.9999 6.73478 15.1052 6.48043 15.2928 6.29289C15.4803 6.10536 15.7347 6 15.9999 6Z"
                    fill="black"
                  />
                </svg>
              )}
            </div>
          </button>
          <span className="text-[0.7rem] font-medium text-gray-800 dark:text-gray-200">
            {isSidebarOpen && (isDarkMode ? "Dark Mode On" : "Light Mode  On")}
          </span>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 min-h-screen bg-gray-50 dark:bg-[#434467]">
        {/* Header */}
        <header className="p-4 bg-white dark:bg-[#1F214A] shadow-md flex justify-between items-center">
          {/* Left: Dashboard Title */}
          <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
            Dashboard
          </h1>

          {/* Right: Country Selector and Profile Icon */}
          <div className="flex items-center space-x-4">
            {/* Country Selector */}
            <div className="relative bg-gray-100 dark:bg-gray-700 px-3   py-2 rounded-full flex items-center space-x-2">
              {/* Flag Image */}
              <img
                src={countries.find((c) => c.name === selectedCountry)?.flag}
                alt={selectedCountry}
                className="w-5 h-5 rounded-full"
              />

              {/* Dropdown */}
              <select
                className="bg-transparent justify-center items-center text-gray-700 dark:bg-gray-700 dark:text-gray-200  appearance-none outline-none text-sm pr-6 w-full box-border"
                value={selectedCountry}
                onChange={(e) => {
                  // Dispatch the setCountry action
                  dispatch(setCountry(e.target.value));
                  setSelectedCountry(e.target.value);
				  localStorage.setItem("selectedCountry",e.target.value);
                }}
              >
                {countries.map((country) => (
                  <option className="" key={country.name} value={country.name}>
                    {country.name}
                  </option>
                ))}
              </select>

              {/* Dropdown Icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="absolute top-1/2 right-2 h-4 w-4 text-gray-500 dark:text-gray-300 transform -translate-y-1/2 pointer-events-none"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>

            {/* Vertical Line */}
            <div className="w-px h-full bg-gray-300 dark:bg-gray-600"></div>

            {/* Profile Icon */}
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="15.999" cy="16" r="16" fill="#FF9E2B" />
              <path
                d="M10.1015 10.5843C9.78141 10.9044 9.60156 11.3386 9.60156 11.7914C9.60156 12.2441 9.78141 12.6783 10.1015 12.9984C10.4217 13.3185 10.8558 13.4984 11.3086 13.4984C11.7613 13.4984 12.1955 13.3185 12.5156 12.9984C12.8357 12.6783 13.0156 12.2441 13.0156 11.7914C13.0156 11.3386 12.8357 10.9044 12.5156 10.5843C12.1955 10.2642 11.7613 10.0844 11.3086 10.0844C10.8558 10.0844 10.4217 10.2642 10.1015 10.5843Z"
                fill="white"
              />
              <path
                d="M21.0507 10.5843C20.7305 10.2642 20.2963 10.0844 19.8436 10.0844C19.3909 10.0844 18.9567 10.2642 18.6366 10.5843C18.3165 10.9044 18.1366 11.3386 18.1366 11.7914C18.1366 12.2441 18.3165 12.6783 18.6366 12.9984C18.9567 13.3185 19.3909 13.4984 19.8436 13.4984C20.2963 13.4984 20.7305 13.3185 21.0507 12.9984C21.3708 12.6783 21.5506 12.2441 21.5506 11.7914C21.5506 11.3386 21.3708 10.9044 21.0507 10.5843Z"
                fill="white"
              />
              <path
                d="M15.9959 19.3627C14.0115 19.3627 12.6246 18.4292 11.8137 17.5544H11.8244C11.3443 17.0316 10.5388 16.9996 10.016 17.4797C9.49327 17.9598 9.46126 18.7706 9.94136 19.2881C11.1096 20.563 13.142 21.9232 16.0012 21.9232C18.8605 21.9232 20.8876 20.5576 22.0611 19.2881C22.5412 18.7706 22.5039 17.9598 21.9864 17.4797C21.469 16.9996 20.6582 17.0369 20.1781 17.5544C19.3673 18.4292 17.9803 19.3627 15.9959 19.3627Z"
                fill="white"
              />
            </svg>
          </div>
        </header>

        {/* Main Content */}
        <main className="p-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filterdata?.metrics?.map((stat, index) => (
              <StatCard
                key={index}
                title={stat.title}
                value={stat.value}
                change={stat.change}
                isPositive={stat.isPositive}
                unit={stat.unit}
              />
            ))}
          </div>
          <div className=" mt-5">
            <SalesOverview isDarkMode={isDarkMode}></SalesOverview>
          </div>

          <div className=" mt-5  gap-4   md:flex">
            <RegisteredUsers></RegisteredUsers>
            <IntegrationList></IntegrationList>
          </div>
          {/* Add more content here */}
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
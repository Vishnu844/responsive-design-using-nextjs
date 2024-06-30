import React from "react";
import facebook from "../../../public/images/footer-facebook.png";
import twitter from "../../../public/images/twitter.png";
import instagram from "../../../public/images/instagram.png";
import pinterest from "../../../public/images/pinterest.png";
import googlePlus from "../../../public/images/google-plus.png";
import youtube from "../../../public/images/youtube.png";
import telegram from "../../../public/images/telegram.png";
import inbox from "../../../public/images/message-inbox.png";
import Image from "next/image";

const Footer = () => {
  const footerItems = [
    {
      title: "Hobbycue",
      links: ["About us", "Our Services", "Work with Us", "FAQ", "Contact US"],
    },
    {
      title: "How Do I",
      links: [
        "Sign Up",
        "Add a Listing",
        "Claim Listing",
        "Post a Query",
        "Add a Blog Post",
        "Other Queries",
      ],
    },
    {
      title: "Quick Links",
      links: ["Listings", "Blog Posts", "Shop / Store", "Community"],
    },
  ];

  const socialIcons = [
    { title: "facebook", link: facebook },
    { title: "twitter", link: twitter },
    { title: "instagram", link: instagram },
    { title: "pinterest", link: pinterest },
    { title: "google-plus", link: googlePlus },
    { title: "youtube", link: youtube },
    { title: "telegram", link: telegram },
    { title: "inbox", link: inbox },
  ];
  return (
    <>
      <section className="py-6 px-8 sm:py-14 sm:px-24">
        <div className="grid footer-grid gap-y-8 sm:gap-y-0">
          {footerItems.map((item, index) => {
            return (
              <div key={index}>
                <h3 className="text-sm font-bold mb-4">{item.title}</h3>
                <ul>
                  {item.links.map((link, index) => {
                    return (
                      <li key={index} className="text-sm leading-7">
                        {link}
                      </li>
                    );
                  })}
                </ul>
              </div>
            );
          })}
          <div className="h-52 flex flex-col justify-between">
            <div>
              <h3 className="text-sm font-bold mb-4">Social Links</h3>
              <ul className="flex gap-3 sm:gap-8">
                {socialIcons.map((icon, index) => {
                  return (
                    <li key={index}>
                      <Image
                        src={icon.link}
                        alt={icon.title}
                        className="object-contain"
                      />
                    </li>
                  );
                })}
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-bold mb-4">Invite Friends</h3>
              <div className="flex">
                <input
                  type="text"
                  placeholder="Email ID"
                  className="w-full bg-gray-100 hover:bg-gray-200 h-10 p-3 text-xs rounded-l-md lg:block"
                />
                <button className="bg-primary p-2 rounded-r-md text-xs text-white">
                  Invite
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer className="w-full h-20 flex items-center justify-center bg-primaryLight">
        <p className="text-sm font-medium letter-spacing">© Purple Cues Private Limited</p>
      </footer>
    </>
  );
};

export default Footer;

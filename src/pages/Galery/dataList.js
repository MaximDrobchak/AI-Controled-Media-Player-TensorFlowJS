import { YouTubeImage, StyleTransfer } from "./img";
import * as routeTypes from "../../constants/routes";

export default [
  {
    id: "0",
    title: "YouTube",
    describtion: "You can manage you-tube media player with help you voice",
    image: YouTubeImage,
    preview: {
      icon: "external-link-alt",
      text: "preview",
      to: routeTypes.YOUTUBE
    },
    add: {
      icon: "cart-plus",
      text: "add",
      to: "/home"
    }
  },
  {
    id: "1",
    title: "Style Transfer",
    describtion:
      "You can interbreed you photo with masterpieces of famous artists",
    image: StyleTransfer,
    preview: {
      icon: "external-link-alt",
      text: "preview",
      to: routeTypes.STYLE_TRANSFER
    },
    add: {
      icon: "cart-plus",
      text: "add",
      to: "/home"
    }
  }
];

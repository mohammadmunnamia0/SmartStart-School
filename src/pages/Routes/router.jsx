import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../../ErrorPage";
import AboutPage from "../AboutPage";
import ContactPage from "../ContactPage";
import CoursesPage from "../CoursesPage";
import DevelopmentalBehaviorTherapyPage from "../DevelopmentalBehaviorTherapyPage";
import HomePage from "../HomePage";
import OccupationalTherapyPage from "../OccupationalTherapyPage";
import SpeechTherapyPage from "../SpeechTherapyPage";
import Root from "../../Root";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "about", element: <AboutPage /> },
      { path: "courses", element: <CoursesPage /> },
      { path: "contact", element: <ContactPage /> },
      { path: "speech-therapy", element: <SpeechTherapyPage /> },
      { path: "occupational-therapy", element: <OccupationalTherapyPage /> },
      { path: "developmental-behavior-therapy", element: <DevelopmentalBehaviorTherapyPage /> },
    ],
  },
]);

export default router; 
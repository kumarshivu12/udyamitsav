import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/HomePage";
import SponsorPage from "../pages/SponsorPage";
import EventPage from "../pages/EventPage";
import SpeakerPage from "../pages/SpeakerPage";
import TestPage from "../pages/TestPage";
import GuestPage from "../pages/GuestPage";
import TeamPage from "../pages/TeamPage";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <HomePage></HomePage>,
  },
  {
    path: "/events",
    element: <EventPage></EventPage>,
  },
  {
    path: "/sponsors",
    element: <SponsorPage></SponsorPage>,
  },
  {
    path: "/speakers",
    element: <SpeakerPage></SpeakerPage>,
  },
  {
    path: "/guests",
    element: <GuestPage></GuestPage>,
  },
  {
    path: "/teams",
    element: <TeamPage></TeamPage>,
  },
  {
    path: "/test",
    element: <TestPage></TestPage>,
  },
]);

export default routes;

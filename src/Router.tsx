import React from 'react';
import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';

// Section Layouts
import UrbanZooLayout from './layouts/UrbanZooLayout';
import GreenGardenLayout from './layouts/GreenGardenLayout';
import PlayParkLayout from './layouts/PlayParkLayout';
import DiscoveryLayout from './layouts/DiscoveryLayout';
import CommunityLayout from './layouts/CommunityLayout';

// Pages
import HomePage from './pages/Home/HomePage';

// Zoo Pages
import AnimalsPage from './pages/Zoo/AnimalsPage';
import StoriesPage from './pages/Zoo/StoriesPage';
import ZooZonesPage from './pages/Zoo/ZonesPage';

// Garden Pages
import IndoorPage from './pages/Garden/IndoorPage';
import PondPage from './pages/Garden/PondPage';
import GardenZonesPage from './pages/Garden/ZonesPage';

// Park Pages
import AttractionsPage from './pages/Park/AttractionsPage';
import PlaygroundPage from './pages/Park/PlaygroundPage';
import WaterplayPage from './pages/Park/WaterplayPage';

// Discovery Pages
import MapPage from './pages/Discovery/MapPage';
import ProgramsPage from './pages/Discovery/ProgramsPage';
import CoursesPage from './pages/Discovery/CoursesPage';

// Community Pages
import NewsPage from './pages/Community/NewsPage';
import ReviewsPage from './pages/Community/ReviewsPage';
import SupportPage from './pages/Community/SupportPage';
import CalendarPage from './pages/Community/CalendarPage';

// Reservation & Payment Pages
import ReservationPage from './pages/Reservation/ReservationPage';
import PaymentPage from './pages/Payment/PaymentPage';
import PaymentCompletePage from './pages/Payment/PaymentCompletePage';

// Auth Pages
import LoginPage from './pages/Auth/LoginPage';
import SignUpPage from './pages/Auth/SignUpPage';

// User Pages
import MyPage from './pages/MyPage/MyPage';
import MyReservations from './pages/MyPage/MyReservations';
import MyProfile from './pages/MyPage/MyProfile';
import MyActivities from './pages/MyPage/MyActivities';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      // Urban Zoo Routes with Layout
      {
        path: 'zoo',
        element: <UrbanZooLayout />,
        children: [
          {
            index: true,
            element: <Navigate to="/zoo/animals" replace />,
          },
          {
            path: 'animals',
            element: <AnimalsPage />,
          },
          {
            path: 'stories',
            element: <StoriesPage />,
          },
          {
            path: 'zones',
            element: <ZooZonesPage />,
          },
        ],
      },
      // Green Garden Routes with Layout
      {
        path: 'garden',
        element: <GreenGardenLayout />,
        children: [
          {
            index: true,
            element: <Navigate to="/garden/indoor" replace />,
          },
          {
            path: 'indoor',
            element: <IndoorPage />,
          },
          {
            path: 'pond',
            element: <PondPage />,
          },
          {
            path: 'zones',
            element: <GardenZonesPage />,
          },
        ],
      },
      // Play Park Routes with Layout
      {
        path: 'park',
        element: <PlayParkLayout />,
        children: [
          {
            index: true,
            element: <Navigate to="/park/attractions" replace />,
          },
          {
            path: 'attractions',
            element: <AttractionsPage />,
          },
          {
            path: 'playground',
            element: <PlaygroundPage />,
          },
          {
            path: 'waterplay',
            element: <WaterplayPage />,
          },
        ],
      },
      // Discovery Routes with Layout
      {
        path: 'discovery',
        element: <DiscoveryLayout />,
        children: [
          {
            index: true,
            element: <Navigate to="/discovery/map" replace />,
          },
          {
            path: 'map',
            element: <MapPage />,
          },
          {
            path: 'programs',
            element: <ProgramsPage />,
          },
          {
            path: 'courses',
            element: <CoursesPage />,
          },
        ],
      },
      // Community Routes with Layout
      {
        path: 'community',
        element: <CommunityLayout />,
        children: [
          {
            index: true,
            element: <Navigate to="/community/news" replace />,
          },
          {
            path: 'news',
            element: <NewsPage />,
          },
          {
            path: 'reviews',
            element: <ReviewsPage />,
          },
          {
            path: 'support',
            element: <SupportPage />,
          },
          {
            path: 'calendar',
            element: <CalendarPage />,
          },
        ],
      },
      // Reservation Routes
      {
        path: 'reservation',
        element: <ReservationPage />,
      },
      // Payment Routes
      {
        path: 'payment',
        element: <PaymentPage />,
      },
      {
        path: 'payment/complete',
        element: <PaymentCompletePage />,
      },
      // Auth Routes
      {
        path: 'login',
        element: <LoginPage />,
      },
      {
        path: 'signup',
        element: <SignUpPage />,
      },
      // User Routes with Nested Layout
      {
        path: 'mypage',
        element: <MyPage />,
        children: [
          {
            path: 'reservations',
            element: <MyReservations />,
          },
          {
            path: 'profile',
            element: <MyProfile />,
          },
          {
            path: 'activities',
            element: <MyActivities />,
          },
        ],
      },
    ],
  },
]);

const AppRouter: React.FC = () => {
  return <RouterProvider router={router} />;
};

export default AppRouter;

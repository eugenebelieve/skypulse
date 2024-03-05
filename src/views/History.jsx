import React, { useState, useEffect, useRef } from "react";
import Chat from './Chat';
import Journey from './Journey';
import Nav from './Nav';
import { Card } from 'flowbite-react';
import { useLocation } from "react-router-dom";
import axios from "axios";

const History = ({ request }) => {

  console.log(request)

  return (
    <>
      <>
        <div className="min-h-full">
          <Nav />
          <header className="bg-white shadow">
            <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
              <h1 className="text-3xl font-bold tracking-tight text-gray-900">Skypulse Concierge</h1>
            </div>
          </header>
          <main>
            hello
          </main>
        </div>

      </>
    </>
  );
};

export default History;

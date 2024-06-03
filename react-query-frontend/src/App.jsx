import React from "react";
import { Route, Routes } from "react-router-dom";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import { QueryClientProvider, QueryClient } from "@tanstack/react-query";

import Navbar from "./components/NavBar";
import Home from "./components/Home";
import Users from "./components/Users";

const App = () => {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <div>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/users" element={<Users />} />
          </Routes>
        </div>
        <ReactQueryDevtools initialIsOpen={false} position="bottom" />
      </div>
    </QueryClientProvider>
  );
};

export default App;

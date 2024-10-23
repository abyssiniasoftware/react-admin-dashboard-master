import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Topbar from "./scenes/global/Topbar";
import Sidebar from "./scenes/global/Sidebar";
import Dashboard from "./scenes/dashboard";
import Team from "./scenes/team";
import Invoices from "./scenes/invoices";
import Contacts from "./scenes/contacts";
import Bar from "./scenes/bar";
import Form from "./scenes/form";

import SaleForm from './scenes/sale';
import BookForm from './scenes/book';
import AudioForm from './scenes/audio';
import AuthorForm from './scenes/author';

import Line from "./scenes/line";
import Pie from "./scenes/pie";
import FAQ from "./scenes/faq";
import Geography from "./scenes/geography";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import Calendar from "./scenes/calendar/calendar";
import PaymentDetails from "./scenes/PaymentDetail";
import CreatorAnnouncement from "./scenes/CreatorAnnouncement";
import FeedbackList from "./scenes/feedback/FeedbackList"; // Import the FeedbackList component
import AuthorToAdminMessage from "./scenes/AuthorToAdminMessage/AuthorToAdminMessage";
import { Message } from "@mui/icons-material";
import AdminMessage from "./scenes/message";
import AddBookForm from "./scenes/AddBookForm";
import ManageAnnouncement from "./scenes/ManageAnnouncement";
import AnnouncementForm from "./scenes/ManageAnnouncement/announcementForm";
function App() {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);

  // Sample feedback data to be passed to the FeedbackList component
  const feedbackData = [
    {
      reviewer: 'Alice Johnson',
      date: '2024-10-15',
      comment: 'Great work, but consider revising the introduction.',
      annotations: [
        { page: 3, text: 'Highlighted text here...', note: 'Consider rephrasing' },
        { page: 7, text: 'Another highlighted text...', note: 'Clarify this point' },
      ],
      report: {
        criteria: [
          { name: 'Clarity', rating: 4 },
          { name: 'Structure', rating: 5 },
          { name: 'Content Quality', rating: 3 },
        ],
        comments: 'Overall, well-structured but needs more in-depth analysis.'
      }
    },
    // Add more feedback entries as needed
  ];

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <Sidebar isSidebar={isSidebar} />
          <main className="content bg-red-500">
            <Topbar setIsSidebar={setIsSidebar} />
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/team" element={<Team />} />
              <Route path="/contacts" element={<Contacts />} />
              <Route path="/invoices" element={<Invoices />} />
              <Route path="/form" element={<Form />} />
              <Route path="/bar" element={<Bar />} />
              <Route path="/pie" element={<Pie />} />
              <Route path="/line" element={<Line />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/calendar" element={<Calendar />} />
              <Route path="/geography" element={<Geography />} />
              {/*  abenezer route */}
              <Route path="/payment-detail" element={<PaymentDetails />} />
              <Route path="/creator-announcement" element={<CreatorAnnouncement />} />
              <Route path="/feedback" element={<FeedbackList feedbackData={feedbackData} />} />
              <Route path="/author-to-admin-message" element={<AuthorToAdminMessage />} />
              <Route path="/add-book-form" element={<AddBookForm/>} />
              <Route path="/manage-announcement" element={< ManageAnnouncement/>} />
              <Route path="/announcement-form" element={<AnnouncementForm/>} />
             
              {/*  demo route */}
              <Route path="/message" element={<AdminMessage />} />

              {/* birukti route  */}

              <Route path="/sale" element={<SaleForm />} />
              <Route path="/book" element={<BookForm />} />
              <Route path="/author" element={<AuthorForm />} />
              <Route path="/audio" element={<AudioForm />} />
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;

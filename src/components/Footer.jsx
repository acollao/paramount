// src/components/Footer.jsx
export default function Footer() {
  return (
    <footer className="bg-[#0b1a0f] text-gray-300 py-6 mt-10">
      <div className="max-w-7xl mx-auto text-center">
        <p>© {new Date().getFullYear()} Paramount Transportation Inc. All rights reserved.</p>
      </div>
    </footer>
  );
}

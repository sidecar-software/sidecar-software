
import './home.css';

export default function ContactUs() {
    return <div className="w-full max-w-6xl mx-auto p-6 bg-white rounded-lg shadow-lg">
    <h2 className="text-3xl font-semibold text-center text-gray-800 mb-6">Contact Us</h2>
  
    <form action="#" method="POST" className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label for="name" class="block text-gray-700">Full Name</label>
          <input type="text" id="name" name="name" required className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
        </div>
  
        <div>
          <label for="email" class="block text-gray-700">Email Address</label>
          <input type="email" id="email" name="email" required className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
        </div>
      </div>
  
      <div>
        <label for="message" class="block text-gray-700">Message</label>
        <textarea id="message" name="message" rows="6" required className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"></textarea>
      </div>
  
      <div className="text-center">
        <button type="submit" className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500">Send Message</button>
      </div>
    </form>
  </div>;
}

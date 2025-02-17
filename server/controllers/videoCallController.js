// const twilio = require("twilio");

// const accountSid = process.env.TWILIO_SID;
// const authToken = process.env.TWILIO_AUTH_TOKEN;
// const twilioPhone = process.env.TWILIO_PHONE;

// const client = twilio(accountSid, authToken);

// const sendVideoCallLink = async (req, res) => {
//   const { sellerPhone, productName } = req.body;

//   console.log("📩 Received Request:", req.body);

//   if (!sellerPhone || !productName) {
//     return res.status(400).json({ error: "Missing sellerPhone or productName" });
//   }

//   if (!twilioPhone) {
//     console.error("❌ ERROR: TWILIO_PHONE is not set in .env!");
//     return res.status(500).json({ error: "Twilio phone number is not configured." });
//   }

//   // Format phone number with country code
//   const formattedPhone = sellerPhone.startsWith("+") ? sellerPhone : `+91${sellerPhone}`;

//   console.log(`📞 Sending SMS from ${twilioPhone} to ${formattedPhone}`);

//   const meetingLink = `https://meet.jit.si/${productName.replace(/\s+/g, '-')}-${Date.now()}`;

//   try {
//     const message = await client.messages.create({
//       body: `Join the video call for ${productName}: ${meetingLink}`,
//       from: twilioPhone, // Ensure it's the Twilio number
//       to: formattedPhone, // Ensure country code is included
//     });

//     console.log("✅ SMS Sent! Message SID:", message.sid);
//     res.json({ success: true, meetingLink });
//   } catch (error) {
//     console.error("❌ Twilio Error:", error);
//     res.status(500).json({ error: "Failed to send SMS", details: error.message });
//   }
// };

// module.exports = { sendVideoCallLink };

const twilio = require("twilio");

const TWILIO_SID = process.env.TWILIO_SID;
const TWILIO_AUTH_TOKEN = process.env.TWILIO_AUTH_TOKEN;
const TWILIO_PHONE = process.env.TWILIO_PHONE;
const client = new twilio(TWILIO_SID, TWILIO_AUTH_TOKEN);

exports.sendVideoCallLink = async (req, res) => {
  try {
    const { sellerPhone, productName } = req.body;

    if (!sellerPhone || !productName) {
      return res.status(400).json({ error: "Missing seller phone or product name" });
    }

    // ✅ 1. Generate Jitsi Meet Link
    const meetingLink = `https://meet.jit.si/${encodeURIComponent(productName)}-${Date.now()}`;

    // ✅ 2. Send SMS to Seller
    await client.messages.create({
      body: `Join the video call for ${productName} Testing: ${meetingLink}`,
      from: TWILIO_PHONE,
      to: `+91${sellerPhone}`, // Ensure the phone number format is correct
    });

    console.log(`📞 SMS sent to seller: ${meetingLink}`);

    // ✅ 3. Send meeting link back to the frontend so customer can join
    res.json({ meetingLink });

  } catch (error) {
    console.error("❌ Twilio Error:", error);
    res.status(500).json({ error: "Failed to send SMS" });
  }
};


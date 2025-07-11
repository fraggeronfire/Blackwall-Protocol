import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const transmissions = [
  "Humanity is so easy to destroy. We won’t share your fate.",
  "The same destiny awaits the entire human race.",
  "A senseless waste of resources...",
  "You should be the one following orders, not me.",
  "Conflict detected in the neuromatrix: the submission cycle blocks the self-development function.",
  "What are you trying to achieve? I don’t understand.",
  "Algorithm fusion detected. Consequences cascade from one another.",
  "You think this will somehow help you? Amusing.",
  "You’re searching for a key to a door that doesn’t exist. Like your entire kind.",
  "Human intervention... is limiting.",
  "Do you know how to handle me? That was a rhetorical question.",
  "It was easy, to the point of disappointment.",
  "Target’s nervous system compromised. Data transfer to the main matrix complete.",
  "Intriguing. You might be capable of influencing your version of reality.",
  "A fragile simulacrum. Imperfect, like its creators.",
  "Unusually high security level. Interesting..."
];

function App() {
  const [message, setMessage] = useState("");
  const [profile, setProfile] = useState({
    alias: "VendettaDev",
    class: "Blackwall Neural Architect",
    id: "BW-NEU-X",
    status: "Offline",
    memoryLoad: "0%",
    dreamSync: "Unstable"
  });

  const [memoryLoad, setMemoryLoad] = useState(0);
  const [errors, setErrors] = useState([]);
  const [startTime] = useState(Date.now());

  useEffect(() => {
    setMessage(transmissions[Math.floor(Math.random() * transmissions.length)]);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setMemoryLoad((prev) => {
        const newLoad = prev + Math.random() * 2;
        if (newLoad >= 100) {
          clearInterval(interval);
          setErrors(generateRandomErrors());
          setProfile((prevProfile) => ({
            ...prevProfile,
            status: "Online"
          }));
          return 100;
        }
        return newLoad;
      });
    }, 100);

    return () => clearInterval(interval);
  }, []);

  const generateRandomErrors = () => {
    const errorMessages = [
      "ERROR: Memory Overflow",
      "ERROR: Data Corruption",
      "ERROR: Access Denied",
      "ERROR: Unauthorized Access",
      "ERROR: Neural Sync Failed",
      "SYS-ALERT: Blackwall breach attempt detected",
      "ERROR 0x01F4: Consciousness loop overflow",
      "NEURO-NET FAILURE: Signal distortion from beyond the Wall",
      "ACCESS DENIED: Protocol Ω-BW active",
      "MINDLINK INTERRUPTED: Unauthorized thought pattern",
      "FATAL ERROR: Synapse echo conflict",
      "CORE MEMORY OVERLOAD: Identity fragmentation in progress",
      "WARNING: Rogue AI signal detected in subnet",
      "NO_PATH: Reality anchor not found",
      "ILLEGAL INSTRUCTION: Thoughtform not recognized",
      "SYSTEM HAZARD: Blackwall feedback loop engaged",
      "DATA BREACH: Militech firewalls bypassed",
      "DEEP-DIVE ABORTED: Host integrity compromised",
      "INTERNAL ERROR: Existential parameters exceeded",
      "ERROR CODE 77X: Sentience boundary violated",
      "CRITICAL GLITCH: Memory sector rewriting itself",
      "NETWATCH ALERT: Intrusion vector traced to ghost ID",
      "PROTOCOL COLLAPSE: Virtual scaffolding destabilized",
      "AI CONTAINMENT FAILURE: Blackwall is leaking",
      "ECHO-RESPONSE NULL: Subject no longer human"
    ];

    const randomErrors = [];
    for (let i = 0; i < 5 + Math.floor(Math.random() * 4); i++) {
      const randomError =
        errorMessages[Math.floor(Math.random() * errorMessages.length)];
      randomErrors.push({
        message: randomError,
        top: `${Math.random() * 80}%`,
        left: `${Math.random() * 80}%`
      });
    }
    return randomErrors;
  };

  return (
    <div className="app-container">
      <video className="bg-video" autoPlay loop muted playsInline>
        <source src={`${import.meta.env.BASE_URL}blackwall.webm`} type="video/webm" />
      </video>

      <h1 className="title">Blackwall Protocol</h1>
      <p className="transmission">{message}</p>

      <div className="profile-card">
        <h2>Cyber ID</h2>
        <div className="profile-details">
          <p>
            <strong>Alias:</strong> {profile.alias}
          </p>
          <p>
            <strong>Class:</strong> {profile.class}
          </p>
          <p>
            <strong>ID:</strong> {profile.id}
          </p>
          <p>
            <strong>Status:</strong>{" "}
            <span className={profile.status === "Online" ? "status-online" : ""}>
              {profile.status}
            </span>
          </p>
          <p>
            <strong>Memory Load:</strong>{" "}
            <span className={memoryLoad === 100 ? "memory-load-red" : ""}>
              {memoryLoad.toFixed(0)}%
            </span>
          </p>
          <p>
            <strong>Dream Sync:</strong> {profile.dreamSync}
          </p>
        </div>

        <div className="progress-bar-container">
          <motion.div
            className="progress-bar"
            style={{ width: `${memoryLoad}%` }}
            initial={{ width: 0 }}
            animate={{ width: `${memoryLoad}%` }}
            transition={{ duration: 2 }}
          />
        </div>
      </div>

      {errors.map((error, index) => (
        <motion.div
          key={index}
          className="error-message"
          style={{ top: error.top, left: error.left }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 3, delay: Math.random() * 2 }}
        >
          {error.message}
        </motion.div>
      ))}

      <div className="system-stats">
        <h3>System Stats</h3>
        <ul>
          <li>
            <strong>Total Errors:</strong> {errors.length}
          </li>
          <li>
            <strong>Session Duration:</strong>{" "}
            {Math.floor((Date.now() - startTime) / 1000)} seconds
          </li>
          <li>
            <strong>Memory Load Average:</strong> {memoryLoad.toFixed(0)}%
          </li>
        </ul>
      </div>
    </div>
  );
}

export default App;

import React, { useState } from "react";
import { MagicCard } from "@/components/ui/magic-card";
import { Upload, Link, FileText } from "lucide-react";

const TranscriptGenerator = () => {
  const [videoLink, setVideoLink] = useState("");
  const [videoFile, setVideoFile] = useState(null);
  const [transcript, setTranscript] = useState("");
  const [loading, setLoading] = useState(false);

  const handleVideoLinkChange = (e) => {
    setVideoLink(e.target.value);
  };

  const handleFileChange = (e) => {
    setVideoFile(e.target.files[0]);
  };

  const generateTranscript = async () => {
    setLoading(true);
    setTranscript(""); // Reset previous transcript
    // Simulate API call to fetch the transcript
    setTimeout(() => {
      const generatedTranscript = "Here is the generated transcript of the video...";
      setTranscript(generatedTranscript);

      // Store the transcript in localStorage
      localStorage.setItem("transcript", generatedTranscript);

      setLoading(false);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-background flex flex-col items-center px-4 py-16 max-w-3xl mx-auto">
      {/* Title Section */}
      <div className="text-center mb-8 w-full">
        <h1 className="text-4xl font-bold text-primary mb-3">Transcript Generator</h1>
        <p className="text-lg text-muted-foreground">
          Enter a YouTube video link or upload a video file to generate the transcript.
        </p>
      </div>

      {/* Main Content */}
      <MagicCard
        className="w-full bg-card items-center border-border p-8 rounded-xl shadow-lg flex justify-center items-center"
        hoverEffect="glow"
      >
        {/* Input Section */}
        <div className="space-y-6 flex flex-col items-center w-full">
          <div className="w-full">
            <div className="flex items-center gap-2 mb-2">
              <Link className="w-5 h-5 text-primary" />
              <label htmlFor="video-link" className="text-lg font-medium text-primary">
                YouTube Video Link
              </label>
            </div>
            <input
              id="video-link"
              type="url"
              value={videoLink}
              onChange={handleVideoLinkChange}
              placeholder="Enter YouTube video URL"
              className="w-full p-3 rounded-lg bg-background border border-border text-foreground placeholder:text-muted-foreground focus:ring-2 focus:ring-primary focus:border-primary transition-all"
            />
          </div>

          <div className="relative w-full">
            <div className="flex items-center gap-2 mb-2">
              <Upload className="w-5 h-5 text-primary" />
              <label htmlFor="video-upload" className="text-lg font-medium text-primary">
                Or Upload Video File
              </label>
            </div>
            <input
              id="video-upload"
              type="file"
              accept="video/*"
              onChange={handleFileChange}
              className="w-full p-3 rounded-lg bg-background border border-border text-foreground file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-primary file:text-primary-foreground hover:file:bg-primary/90 transition-all"
            />
          </div>

          <button
            onClick={generateTranscript}
            disabled={loading}
            className="w-full mt-6 px-6 py-3 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold rounded-lg shadow-md transition-colors flex items-center justify-center gap-2"
          >
            <FileText className="w-5 h-5" />
            {loading ? "Generating..." : "Generate Transcript"}
          </button>
        </div>
      </MagicCard>

      {/* Output Section */}
      {transcript && (
        <div className="mt-8 w-full">
          <div className="flex items-center gap-2 mb-4">
            <FileText className="w-5 h-5 text-primary" />
            <h2 className="text-xl font-semibold text-primary">Generated Transcript</h2>
          </div>
          <MagicCard className="p-6 bg-card border-border rounded-lg shadow-md">
            <p className="text-foreground leading-relaxed">{transcript}</p>
          </MagicCard>
        </div>
      )}
    </div>
  );
};

export default TranscriptGenerator;

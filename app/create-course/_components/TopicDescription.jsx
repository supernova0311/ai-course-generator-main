import { UserInputContext } from "@/app/_context/UserInputContext";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import React, { useContext, useState } from "react";

// List of topic suggestions
const TOPIC_SUGGESTIONS = [
  "MAthematics",
  "Science",
  "Physics",
  "Chemistry",
  "Python Programming",
  "Web Development",
  "Data Science",
  "Machine Learning",
  "Yoga for Beginners",
  "Digital Marketing",
  "Graphic Design",
  "Personal Finance",
  "Photography Basics",
  "Public Speaking"
];

// List of blocked words (partial list - you should expand this)
const BLOCKED_WORDS = [
  "sex", "porn", "fuck", "shit", "asshole", "bastard", "bitch", "cunt", 
  "dick", "nigger", "whore", "rape", "kill", "murder", "terrorist"
];

const TopicDescription = () => {
  const { userCourseInput, setUserCourseInput } = useContext(UserInputContext);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [filteredSuggestions, setFilteredSuggestions] = useState(TOPIC_SUGGESTIONS);

  const handleInputChange = (fieldname, value) => {
    // Filter out blocked words
    const containsBlockedWord = BLOCKED_WORDS.some(word => 
      value.toLowerCase().includes(word.toLowerCase())
    );
    
    if (containsBlockedWord) {
      alert("Please keep your topic appropriate and professional.");
      return;
    }

    setUserCourseInput((prev) => ({
      ...prev,
      [fieldname]: value,
    }));

    // Filter suggestions based on input
    if (fieldname === "topic") {
      if (value) {
        setFilteredSuggestions(
          TOPIC_SUGGESTIONS.filter(suggestion =>
            suggestion.toLowerCase().includes(value.toLowerCase())
          )
        );
      } else {
        setFilteredSuggestions(TOPIC_SUGGESTIONS);
      }
    }
  };

  const selectSuggestion = (suggestion) => {
    setUserCourseInput((prev) => ({
      ...prev,
      topic: suggestion,
    }));
    setShowSuggestions(false);
  };

  return (
    <div className="mx-20 lg:mx-44">
      {/* Input Topic */}
      <div className="mt-5 relative">
        <label>
          💡 Write a topic for which you want to generate a course (e.g., Python
          Course, Yoga, etc.)
        </label>
        <Input
          className="h-14 text-xl"
          placeholder="e.g., 'Introduction to React', 'Meditation for Stress Relief'"
          value={userCourseInput?.topic || ""}
          onChange={(e) => {
            handleInputChange("topic", e.target.value);
            setShowSuggestions(true);
          }}
          onFocus={() => setShowSuggestions(true)}
          onBlur={() => setTimeout(() => setShowSuggestions(false), 200)}
        />
        
        {showSuggestions && filteredSuggestions.length > 0 && (
          <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg">
            {filteredSuggestions.map((suggestion, index) => (
              <div
                key={index}
                className="px-4 py-2 cursor-pointer hover:bg-gray-100"
                onMouseDown={() => selectSuggestion(suggestion)}
              >
                {suggestion}
              </div>
            ))}
          </div>
        )}
      </div>
      
      {/* TextArea Description */}
      <div className="mt-5">
        <label htmlFor="">
          🔥 Tell us more about your course (Optional but recommended)
        </label>
        <Textarea
          placeholder="Example: 'I want a beginner-friendly course covering Python basics like variables, loops, and functions. Include practical exercises and real-world examples. Target audience is complete beginners with no coding experience.'"
          className="h-24 text-xl"
          value={userCourseInput?.description || ""}
          onChange={(e) => handleInputChange("description", e.target.value)}
        />
        <p className="text-sm text-gray-500 mt-1">
          Tip: The more details you provide, the better we can tailor the course to your needs.
        </p>
      </div>
    </div>
  );
};

export default TopicDescription;
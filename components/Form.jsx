import Link from "next/link";
import React from "react";

const Form = ({ type, post, setPost, submitting, handleSubmit }) => {
  return (
    <section className="w-full max-w-full flex-start flex-col">
      <h1 className="head_text text-left">
        <span className="blue_gradient">{type}</span> Post
      </h1>
      <p className="desc text-left max-w-md">
        {type} and share amazing prompt with the world and let your imagination run wild with any AI-Powered platform
      </p>
      <form className="mt-10 w-full max-w-2xl flex flex-col gap-7 glassmorphism">
        <label>
          <span className="font-satoshi font-semibold text-base text-gray-700">Your AI Prompt</span>
          <textarea
            placeholder="Write your prompt here"
            required
            className="form_textarea"
            value={post.prompt}
            onChange={(e) => setPost({ ...post, prompt: e.target.value })}
          />
        </label>
        <label>
          <span className="font-satoshi font-semibold text-base text-gray-700">
            Tag <span>(#product, #idea)</span>
          </span>
          <input
            placeholder="#tag"
            required
            className="form_input"
            value={post.tag}
            onChange={(e) => setPost({ ...post, tag: e.target.value })}
          />
        </label>
        <div className="flex-end mx-3 mb-5 gap-4">
          <Link
            href="/"
            className="text-gray-500 text-sm">
            Cancel
          </Link>
          <button
            type="submit"
            onClick={handleSubmit}
            className="px-5 py-1.5 text-sm bg-primary-orange rounded-full text-white"
            disabled={submitting}>
            {submitting ? `${type}...` : type}
          </button>
        </div>
      </form>
    </section>
  );
};

export default Form;


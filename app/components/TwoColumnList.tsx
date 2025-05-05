"use client";

import { useEffect, useRef, useState } from "react";

type Item = {
  id: number;
  title: string;
  content: string;
};

type TwoColumnListProps = {
  items: Item[];
};

export default function TwoColumnList({ items }: TwoColumnListProps) {
  const [selectedItem, setSelectedItem] = useState<Item | null>(items[0]);
  const [textWidths, setTextWidths] = useState<{ [key: number]: number }>({});
  const textRef = useRef<{ [key: number]: HTMLSpanElement | null }>({});

  useEffect(() => {
    const newWidths: { [key: number]: number } = {};
    items.forEach((item) => {
      const el = textRef.current[item.id];
      if (el) newWidths[item.id] = el.offsetWidth;
    });
    setTextWidths(newWidths);
  }, [items, selectedItem]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-[332px_1fr] gap-8 items-start">
      {/* Left column — список заголовків */}
      <div className="flex flex-col items-end space-y-2">
        {items.map((item) => {
          const isActive = selectedItem?.id === item.id;
          const shift = textWidths[item.id] ? 318 - textWidths[item.id] : 0;

          return (
            <div
              key={item.id}
              className={`h-[50px] w-[332px] pt-3 cursor-pointer transition-colors ${
                isActive ? "bg-[#4A90E2]" : "bg-transparent"
              }`}
              onClick={() => setSelectedItem(item)}
            >
              <span
                ref={(el) => {
                  textRef.current[item.id] = el;
                }}
                className="inline-block transition-transform duration-300 text-white text-lg"
                style={{
                  transform: isActive
                    ? `translateX(${shift}px)`
                    : "translateX(0)",
                  fontWeight: isActive ? "bold" : "normal",
                }}
              >
                {item.title}
              </span>
            </div>
          );
        })}
      </div>

      {/* Right column — контент */}
      <div>
        {selectedItem ? (
          <p className="text-white text-lg leading-relaxed w-[411px]">
            {selectedItem.content}
          </p>
        ) : (
          <p className="text-white">Oops...</p>
        )}
      </div>
    </div>
  );
}
// This component renders a two-column list where the left column contains clickable titles
// and the right column displays the content of the selected title.
// The selected title is highlighted, and the content updates based on the selected title.
// The component uses a ref to measure the width of the text elements and applies a shift effect
// to the selected title for a smooth transition.
// The `useEffect` hook is used to update the widths of the text elements whenever the items or
// selected item changes.
// The `textWidths` state stores the widths of the text elements, and the `textRef` ref is used
// to access the DOM elements.
// The `setSelectedItem` function updates the selected item when a title is clicked.
// The component is styled using Tailwind CSS classes for a modern and responsive design.
// The `opacity` class is used to control the transparency of the text, and the `transition-colors`
// class is used to animate the background color change on hover.
// The `transform` style is used to apply a translation effect to the selected title, creating a
// smooth transition when switching between titles.
// The `fontWeight` style is used to make the selected title bold, enhancing the visual feedback
// for the user.
// The component is designed to be responsive, adapting to different screen sizes using Tailwind's
// responsive utility classes.
// The `gap-8` class is used to create space between the columns, and the `items-start` class

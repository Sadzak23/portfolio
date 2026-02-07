import type { FC } from "react";
import { Modal } from "@/components/Modal";
import Image from "next/image";
import { story } from "@/data/story";
import clsx from "clsx";

interface Props {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

export const AboutModal: FC<Props> = ({ isOpen, setIsOpen }) => (
  <Modal
    isOpen={isOpen}
    onClose={() => setIsOpen(false)}
    title="MY JOURNEY"
    description="THE FULL STORY"
  >
    {story.map((section) => (
      <div key={section.title}>
        <h4 className="story-modal__subtitle">{section.title}</h4>
        {/* Section Image */}
        {section.image && (
          <Image
            src={section.image.src}
            alt={section.image.alt}
            width={300}
            height={200}
            className={clsx("story-modal__image", {
              [`img-${section.image.align}`]: section.image.align,
            })}
          />
        )}
        {/* Section Images grid */}
        {!!section.images?.length && (
          <div
            className={clsx(
              "images-container flex center",
              `grid-${section.images.length}`,
            )}
          >
            {section.images.map((img) => (
              <Image
                src={img.src}
                key={img.alt}
                alt={img.alt}
                width={300}
                height={300}
                className={clsx("story-modal__image", img.aspectRatio)}
              />
            ))}
          </div>
        )}

        <p
          className={clsx("story-modal__text", {
            "story-modal__text--highlight": section.variant === "highlight",
          })}
        >
          {section.text}
        </p>
      </div>
    ))}
  </Modal>
);

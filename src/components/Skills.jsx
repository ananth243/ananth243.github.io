import {
  Box,
  Center,
  Flex,
  Tag,
  TagLabel,
  TagLeftIcon,
  Tooltip,
} from "@chakra-ui/react";
import React from "react";
import { SiTypescript } from "react-icons/si";
import { DiGit, DiRust, DiDocker } from "react-icons/di";
import { BiInjection } from "react-icons/bi";
import { FaAws, FaDatabase } from "react-icons/fa";

function sort(colors) {}
function Skills() {
  const skills = [
    {
      backgroundColor: "advanced",
      tagLeftIcon: {
        boxSize: "1em",
        as: SiTypescript,
      },
      tagLabel: "Typescript",
    },
    {
      backgroundColor: "advanced",
      tagLeftIcon: {
        boxSize: "1.5em",
        as: DiGit,
      },
      tagLabel: "Git",
    },
    {
      backgroundColor: "beginner",
      tagLeftIcon: {
        boxSize: "2em",
        as: DiRust,
      },
      tagLabel: "Rust",
    },
    {
      backgroundColor: "intermediate",
      tagLeftIcon: {
        boxSize: "1em",
        as: FaDatabase,
      },
      tagLabel: "SQL/NoSQL",
    },
    {
      backgroundColor: "intermediate",
      tagLeftIcon: {
        boxSize: "2em",
        as: DiDocker,
      },
      tagLabel: "Docker",
    },
    {
      backgroundColor: "intermediate",
      tagLeftIcon: {
        boxSize: "1em",
        as: FaAws,
      },
      tagLabel: "AWS",
    },
    {
      backgroundColor: "advanced",
      tagLeftIcon: {
        boxSize: "1em",
        as: BiInjection,
      },
      tagLabel: "Java/Kotlin",
    },
  ];

  skills.sort(function (a, b) {
    if (
      a.backgroundColor === "advanced" &&
      b.backgroundColor === "intermediate"
    )
      return -11;
    else if (
      a.backgroundColor === "intermediate" &&
      b.backgroundColor === "beginner"
    )
      return -1;
    return 1;
  });
  return (
    <Center gap="6" flexWrap={"wrap"} marginTop="2em">
      {skills.map(({ backgroundColor, tagLeftIcon, tagLabel }, id) => (
        <Tooltip label={backgroundColor} key={id}>
          <Tag
            key={id}
            size="lg"
            backgroundColor={backgroundColor}
            color="light.200"
          >
            <TagLeftIcon {...tagLeftIcon} />
            <TagLabel>{tagLabel}</TagLabel>
          </Tag>
        </Tooltip>
      ))}
    </Center>
  );
}

export default Skills;

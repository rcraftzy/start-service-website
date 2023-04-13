'use client'

import Image from "next/image";
import { Tile, TileBackground, TileContent, TileWrapper } from "./tile";
import { WorkBackground, WorkContainer, WorkLeft, WorkRight } from "./work";

const Works = () => (
  <TileWrapper numOfPages={3}>
    <TileBackground><WorkBackground /></TileBackground>
    <TileContent>
      <Tile
        page={0}
        renderContent={({ progress }) => (
          <WorkContainer>
            <WorkLeft progress={progress}>
              <div>
              Lorem ipsum 
              </div>
              <div className="text-4xl md:text-5xl font-semibold tracking-tight">
                dolor sit amet.
              </div>
            </WorkLeft>
            <WorkRight progress={progress}>
              <Image src="/assets/works/discord.png" width={850} height={1620} alt="Pink panda" />
            </WorkRight>
          </WorkContainer>)}
      ></Tile>
    </TileContent>
    <TileContent>
      <Tile
        page={1}
        renderContent={({ progress }) => (
          <WorkContainer>
            <WorkLeft progress={progress}>
              <div>
              Lorem ipsum 
              </div>
              <div className="text-4xl md:text-5xl font-semibold tracking-tight">
                dolor sit amet.
              </div>
            </WorkLeft>
            <WorkRight progress={progress}>
              <Image src="/assets/works/development.png" width={850} height={1620} alt="Pink panda" />
            </WorkRight>
          </WorkContainer>)}
      ></Tile>
    </TileContent>
    <TileContent>
      <Tile
        page={2}
        renderContent={({ progress }) => (
          <WorkContainer>
            <WorkLeft progress={progress}>
              <div>
              Lorem ipsum 
              </div>
              <div className="text-4xl md:text-5xl font-semibold tracking-tight">
                dolor sit amet.
              </div>
            </WorkLeft>
            <WorkRight progress={progress}>
              <Image src="/assets/works/server.svg" width={850} height={1620} alt="Pink panda" />
            </WorkRight>
          </WorkContainer>)}
      ></Tile>
    </TileContent>
  </TileWrapper>
);

export default Works;

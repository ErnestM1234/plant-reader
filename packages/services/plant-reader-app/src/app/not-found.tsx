"use client";

import { Paper, UnlinedContent, LinedContent } from "@/components/Paper";
import Title from "@/components/Title";
import Subtitle from "@/components/Subtitle";
import { List, ListContent, ListItem } from "@/components/List";
import Doodles from "@/components/Doodles";
import Link from "next/link";

export default function NotFound() {
  return (
    <Paper>
      <UnlinedContent>
        <Doodles count={4}>
          <Title>Oops! Page Not Found</Title>
          <Subtitle>Looks like this plant has gone missing!</Subtitle>
        </Doodles>
      </UnlinedContent>

      <LinedContent>
        <p>
          Ernest couldn&apos;t find the page you were looking for. Don&apos;t
          worry though, there are plenty of other plants to check out!
        </p>

        <List>
          <ListContent>
            <ListItem>
              <Link href="/" className="text-primary hover:underline">
                Return to Home
              </Link>
            </ListItem>
          </ListContent>
        </List>
      </LinedContent>
    </Paper>
  );
}

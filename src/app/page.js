"use client";
import { Footer } from "@/components/Footer";
import { Button, Container, Divider, Group, MantineProvider, Pagination, Rating, Text, Textarea, Title } from "@mantine/core";

export default function FoodReviewPage() {
  return (
    <Container size="600px">
      <Title order={2}>Food Review 🍕</Title>
      <Title order={4} mt="sm">Your rating</Title>
      <Rating defaultValue={0} size='lg' />
      <Textarea
        mt="xs"
        placeholder="Do you enjoy eating?"
        label="Your review"
        minRows={3}
      />
      <Button color='orange' mt='xs'>Submit Review</Button>
      <Divider my='sm' />
      <Group position="center">
        <Title order={4}>
          Elon Musk
        </Title>
        <Rating defaultValue={5} />
      </Group>
      <Text align="center" color="dimmed">Best pizza in this world. I give you X score.</Text>
      <Divider my='sm' />
      <Group position="center">
        <Title order={4}>
          Mark Zuck
        </Title>
        <Rating defaultValue={4} />
      </Group>
      <Text align="center" color="dimmed">My favourite part is pepperoni</Text>
      <Pagination position="center" mt='md' mb="xs" total={20} color="orange" />
      <Text align="center" color="dimmed" my='sm'>
        <MantineProvider withGlobalStyles withNormalizeCSS>
          <Footer />
        </MantineProvider>
      </Text>
    </Container>
  );
}

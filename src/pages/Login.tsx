import { Card, Group, Title, TextInput, Button,  Checkbox } from "@mantine/core"
import { DateInput } from '@mantine/dates';

function Login() {
  return (
    <Group mt="5%" position="center">
      <Card w='500px' shadow="xl" padding="lg" radius="md" withBorder>

        <Group position="center">

          <Title c={'teal'} order={1}>
            PA` QUE DIEGO
          </Title>
          <Title ta='center'>
            Complete the data
          </Title>

        </Group>

        <TextInput
          placeholder="for example"
          label="Name"
          radius="md"

        />

        <Group mt='20px'>
          Gender
          <Checkbox
            label="MEN"
            color="Blue"
            size="md"
          />

          <Checkbox
            label="WOMEN"
            color="pink"
            size="md"
          />
        </Group>

        <Group>
          <DateInput mt='15px'
            placeholder="for example January 01, 2001"
            label="Date of Born"
            radius="md"
            size="xs"
          />
        </Group>

        <TextInput mt='15px'
          placeholder="example@example.com"
          label="Mail"
          radius="md"
        />

        <TextInput mt='15px'
          placeholder="for example +58 -"
          label="Phone Number"
          radius="md"
        />

        <TextInput mt='15px'
          placeholder="0115-6485239702"
          label="Custome ID"
          radius="md"
        />
        <Group mt='20px'>
          Membership
          <Checkbox
            label="Bronze"
            color="orange"
            size="md"
          />

          <Checkbox
            label="Silver"
            color="gray"
            size="md"
          />

          <Checkbox
            label="GOLD"
            color="yellow"
            size="md"
          />
        </Group>
        
        
        <Button mt="50px" fullWidth radius="md" color="teal" size="xl" uppercase>
          Save
        </Button>

        <Button mt="10px" fullWidth radius="md" color="gray" size="xl" uppercase>
          Cancel
        </Button>

       

      </Card>
    </Group>
  )
}

export default Login
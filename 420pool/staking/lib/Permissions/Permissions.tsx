import { useAccounts } from '@_/useAccounts';
import { Button, Flex, Heading, Image, Link, Text } from '@chakra-ui/react';
import DelegationIcon from './DelegationIcon.svg';
import { PermissionTable } from './PermissionTable';

export function Permissions() {
  const { data: accounts, refetch: refetchAccounts } = useAccounts();

  return (
    <Flex flexDir="column" gap="7">
      <Flex flexDir="column" gap={7}>
        {accounts?.map((accountId) => (
          <PermissionTable
            key={accountId.toString()}
            accountId={accountId}
            refetchAccounts={refetchAccounts}
          />
        ))}
      </Flex>
      <Flex
        flexGrow="1"
        h="fit-content"
        border="1px solid"
        borderColor="gray.900"
        rounded="base"
        flexDir="column"
        width="100%"
        p="6"
        bg="navy.700"
      >
        <Image src={DelegationIcon} width="48px" alt="Delegate permissions" />
        <Heading fontSize="14px" mt="6">
          Delegate Permissions
        </Heading>
        <Text color="gray.500" fontSize="12px" mb="6">
          Delegation enables a wallet to execute functions on behalf of another wallet/account:
          lock, borrow, withdraw, claim, but not transfer. Manage addresses and their powers below.
        </Text>
        <Link
          href="https://docs.synthetix.io/v/synthetix-v3-user-documentation/protocol-design/vaults#account-permissions"
          rel="noopener"
          target="_blank"
        >
          <Button variant="outline" color="white" colorScheme="gray" size="xs">
            Learn More
          </Button>
        </Link>
      </Flex>
    </Flex>
  );
}

import { Tabs, TabList, TabTrigger, TabSlot } from 'expo-router/ui';
import { Pressable, View, StyleSheet, Text } from 'react-native';

export default function AppTabs() {
return (
<Tabs>
<TabSlot style={{ flex: 1 }} />

  <View style={styles.tabBar}>
    <TabList style={styles.tabList}>
      <TabTrigger name="home" href="/" asChild>
        <Pressable style={styles.tabButton}>
          <Text>Home</Text>
        </Pressable>
      </TabTrigger>

      <TabTrigger name="explore" href="/explore" asChild>
        <Pressable style={styles.tabButton}>
          <Text>Explore</Text>
        </Pressable>
      </TabTrigger>
    </TabList>
  </View>
</Tabs>

);
}

const styles = StyleSheet.create({
tabBar: {
padding: 12,
alignItems: 'center',
},
tabList: {
flexDirection: 'row',
gap: 24,
},
tabButton: {
paddingVertical: 12,
paddingHorizontal: 20,
},
});

import {
  Tabs,
  TabList,
  TabTrigger,
  TabSlot,
} from 'expo-router/ui';

import {
  Pressable,
  View,
  Text,
  StyleSheet,
} from 'react-native';

export default function AppTabs() {
  return (
    <Tabs>
      <View style={styles.container}>
        <TabSlot />
      </View>

      <View style={styles.tabBar}>
        <TabList style={styles.tabList}>
          <TabTrigger name="home" href="/" asChild>
            <Pressable style={styles.tabButton}>
              <Text style={styles.tabText}>⌂  Home</Text>
            </Pressable>
          </TabTrigger>

          <TabTrigger name="explore" href="/explore" asChild>
            <Pressable style={styles.tabButton}>
              <Text style={styles.tabText}>⌕  Explore</Text>
            </Pressable>
          </TabTrigger>
        </TabList>
      </View>
    </Tabs>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  tabBar: {
    backgroundColor: '#FFFFFF',
    borderTopWidth: 1,
    borderTopColor: '#E5E7EB',
    paddingVertical: 12,
    paddingHorizontal: 20,
  },
  tabList: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  tabButton: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 12,
  },
  tabText: {
    color: '#176B65',
    fontSize: 15,
    fontWeight: '600',
  },
});

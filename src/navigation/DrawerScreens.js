export const DrawerScreen = () => {
  return (
    <>
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen
        options={({ navigation }) => ({
          headerRight: () => (
            <Pressable
              onPress={() => navigation.toggleDrawer()}
              style={{ padding: 10 }}
            >
              <AntDesign name="qrcode" size={36} color={colors.primary} />
            </Pressable>
          ),
        })}
        name="Reservations"
        component={Reservations}
      />
    </>
  );
};

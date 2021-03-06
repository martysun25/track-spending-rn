import React from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import { connect } from "react-redux";
import { Content, Text, List, ListItem, Left, Body, Right, Icon, Switch } from "native-base";
import { NavigationScreenProp } from "react-navigation";

import color from "../../theme/color";
import { AppState, PermissionStatus, SpendingLabel } from "../../typings";
import { settingSelectors, settingActionCreators } from "../../redux/reducers/setting.reducer";
import { permissionSelectors } from "../../redux/reducers/permission.reducer";
import { spendingLabelSelectors } from "../../redux/reducers/spending-label.reducer";

const styles = StyleSheet.create({
  itemIcon: { height: 30, width: 30, textAlign: "center", color: color.dark },
});

interface Props {
  navigation: NavigationScreenProp<any, any>;
  locationPermission: PermissionStatus | null;
  isAutoLocateEnabled: boolean;
  spendingLabels: SpendingLabel[];
  setAutoLocate: (enabled: boolean) => void;
}

const Setting = (props: Props) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Content scrollEnabled={false}>
        <Text
          style={{
            paddingHorizontal: 20,
            paddingVertical: 40,
            color: color.primary,
            fontSize: 40,
            fontWeight: "bold",
          }}
        >
          設定
        </Text>
        <List>
          <ListItem icon style={{ marginVertical: 10 }}>
            <Left>
              <Icon type="Entypo" name="location-pin" style={styles.itemIcon} />
            </Left>
            <Body>
              <Text>自動定位</Text>
            </Body>
            <Right>
              <Switch
                trackColor={{ false: color.gray, true: color.primary }}
                value={props.isAutoLocateEnabled}
                onValueChange={props.setAutoLocate}
              />
            </Right>
          </ListItem>
          <ListItem icon style={{ marginVertical: 10 }} button onPress={() => props.navigation.navigate("LabelList")}>
            <Left>
              <Icon type="AntDesign" name="tag" style={styles.itemIcon} />
            </Left>
            <Body>
              <Text>標籤</Text>
            </Body>
            <Right>
              <Text>{props.spendingLabels.length}</Text>
              <Icon name="arrow-forward" />
            </Right>
          </ListItem>
        </List>
      </Content>
    </SafeAreaView>
  );
};

export default connect(
  (state: AppState) => ({
    locationPermission: permissionSelectors.getLocationPermissionStatus(state),
    isAutoLocateEnabled: settingSelectors.isAutoLocateEnabled(state),
    spendingLabels: spendingLabelSelectors.getSpendingLabels(state),
  }),
  { setAutoLocate: settingActionCreators.setAutoLocate }
)(Setting);

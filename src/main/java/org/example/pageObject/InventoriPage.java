package org.example.pageObject;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.Select;

public class InventoriPage {
    public static WebDriver driver;

    public InventoriPage(WebDriver driver) {
        PageFactory.initElements(driver, this);
        this.driver = driver;
    }

    //------------------------------------------BATAS---------------------------------------------//

    @FindBy(xpath = "//select[@class='product_sort_container']")
    private WebElement selectContainer;

    public void sortProductBy(String products) {
        Select b = new Select(selectContainer);
        b.selectByVisibleText(products);
    }

    //------------------------------------------BATAS---------------------------------------------//

    @FindBy(xpath = "//button[@id='add-to-cart-sauce-labs-onesie']")
    private WebElement basketItem1;

    public void clickBasket1() {
        basketItem1.click();
    }

    //------------------------------------------BATAS---------------------------------------------//

    @FindBy(xpath = "//button[@id='add-to-cart-test.allthethings()-t-shirt-(red)']")
    private WebElement basketItem2;

    public void clickBasket2() {
        basketItem2.click();
    }

    //------------------------------------------BATAS---------------------------------------------//

    @FindBy(xpath = "//a[.='2']")
    private WebElement basketItem3;

    public void clickBasket3() {
        basketItem3.click();
    }

    //------------------------------------------BATAS---------------------------------------------//

    @FindBy(xpath = "//span[@class='title']")
    private WebElement displayLandingPage;

    public boolean displayLandingPage() {
        return displayLandingPage.isDisplayed();
    }

}





